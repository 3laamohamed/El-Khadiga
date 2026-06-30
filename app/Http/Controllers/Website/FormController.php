<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Reservation;
use App\Models\ReservationTable;
use App\Models\Setting;
use App\Models\Shop;
use App\Models\ShopSetting;
use App\Models\ShopTable;
use App\Models\TypeOccasion;
use App\Models\Visitor;
use App\Models\Casher;
use App\Models\WeekDay;
use App\Models\WorkHours;
use App\Traits\MyFatooraPayment;
use App\Traits\WhatsAppApi;
use Carbon\Carbon;
use Carbon\CarbonInterval;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Jobs\SendSuccessReservation;
use Illuminate\Support\Facades\Cookie;
use Mail;
use App\Mail\SendSuccessReservationMail;

class FormController extends Controller
{
    use MyFatooraPayment, WhatsAppApi;

    public function createForm($slug = null): \Inertia\Response
    {
        $empId = null;
        if(request()->filled('type')){
            if(request()->type == "emp"){
                $reFunction = $this->getCashier($slug);
                $thisShop   = $reFunction['shop'];
                $empId      = $reFunction['casher']->id;
            }elseif(request()->type == "shop"){
                $thisShop = $this->getShop($slug);
            }
        }else{
            $thisShop = $this->getShop($slug);
        }
        $shop = $thisShop;
        $shopSetting = ShopSetting::query()->where('shop_id', $shop->id)->first();
        $currentDay = Carbon::now()->format('l');
        $weekDay = WeekDay::query()->where('name_en', $currentDay)->first();
        $workHours = WorkHours::query()->where('shop_id', $shop->id)->where('week_day_id', $weekDay->id)->first();
        if ($workHours) {
            $start = $workHours->from_time;
            $end = $workHours->to_time;
            $startFormatted = Carbon::parse($start)->format('h:i A');
            $endFormatted = Carbon::parse($end)->format('h:i A');

            $appointmentsTimes = CarbonPeriod::since(Carbon::parse($start))->minutes(15)->until($end)->toArray();

            $formattedAppointmentsTimes = [];

            foreach ($appointmentsTimes as $appointmentTime) {
                $formattedAppointmentsTimes[] = $appointmentTime->format('h:i A');
            }
        }
        $typeOccasions = TypeOccasion::query()->where('shop_id', $shop->id)->get();
        $services = ShopTable::query()->where('shop_id', $shop->id)->get();
        $cookie = Cookie::make('visitor', json_encode(['visitor_count', $this->visitorCount(), 'last_visit', Carbon::now(), 'shop_id', $shop->id]), 60 * 24 * 7);

        $mobile = '';
        $name = '';
        if (request()->filled('mobile')) {
            $mobile = request()->mobile ?? '';
        }
        if (request()->filled('name')) {
            $name = request()->name ?? '';
        }
        if($shop->template == "old"){
            return Inertia::render('FormReservation/CreateReservation', [
                'shop'              => $shop,
                'cookie'            => $cookie,
                'services'          => $services,
                'typeOccasions'     => $typeOccasions,
                'appointmentsTimes' => $formattedAppointmentsTimes ?? '',
                'shopSetting'       => $shopSetting ?? '',
                'mobile'            => $mobile ?? '',
                'name'              => $name ?? '',
                'category'          => $shop->category->service ?? " ",
                'empId'             => $empId,
            ]);
        }elseif($shop->template == "new"){
            return Inertia::render('FormReservation/NewFormReservation', [
                'shop'              => $shop,
                'cookie'            => $cookie,
                'services'          => $services,
                'typeOccasions'     => $typeOccasions,
                'appointmentsTimes' => $formattedAppointmentsTimes ?? '',
                'shopSetting'       => $shopSetting ?? '',
                'mobile'            => $mobile ?? '',
                'name'              => $name ?? '',
                'category'          => $shop->category->service ?? " ",
                'empId'             => $empId,
            ]);
        }

    }
    

    // public function storeForm(Request $request)
    // {
    //     $validate_arr = [
    //         'shop_id'          => 'required',
    //         'name'             => 'required',
    //         'mobile'           => 'required|numeric',
    //         'count_people'     => 'required|numeric',
    //         'reservation_time' => 'required',
    //         'reservation_date' => 'required',
    //         'notes'            => '',
    //         'service_id'       => 'required',
    //         'shop_table_id'    => '',
    //         'type_occasion_id' => '',
    //     ];
    //     $request->validate($validate_arr, [
    //         'name.required'             => 'حقل الاسم مطلوب',
    //         'mobile.required'           => 'حقل رقم الجوال مطلوب',
    //         'mobile.numeric'            => 'رقم الجوال المدخل  غير صحيح',
    //         'count_people.required'     => 'حقل  عدد الاشخاص مطلوب',
    //         'count_people.numeric'      => 'يرجى ادخال  ارقام فقط',
    //         'reservation_time.required' => 'حقل  وقت الحجز مطلوب',
    //         'reservation_date.required' => 'حقل تاريخ الحجز مطلوب',
    //         'service_id.required'       => 'حقل نوع الحجز مطلوب'
    //     ]);
    //     $shopSetting = ShopSetting::query()->where('shop_id', $request->shop_id)->first();
    //     $countPeopleTable_ids = [];
    //     $largestTable = ShopTable::query()
    //         ->whereDoesntHave('reservationTables', function ($q) use ($request) {
    //             $q->whereDate('reservation_date', $request->reservation_date);
    //         })
    //         ->where('shop_id', $request->shop_id)
    //         ->where('id', $request->service_id)
    //         ->orderByDesc('count_people')
    //         ->first();
    //     if ($largestTable) {
    //         $countPeopleTable_ids[] = $largestTable->id;
    //         $remainingPeople = $request->count_people - $largestTable->count_people;
    //         if ($remainingPeople > 0) {
    //             $remainingTables = ShopTable::query()
    //                 ->whereDoesntHave('reservationTables', function ($q) use ($request) {
    //                     $q->whereDate('reservation_date', $request->reservation_date);
    //                 })
    //                 ->where('shop_id', $request->shop_id)
    //                 ->where('count_people', '<=', $remainingPeople)
    //                 ->get();

    //             foreach ($remainingTables as $table) {
    //                 $countPeopleTable_ids[] = $table->id;
    //                 $remainingPeople -= $table->count_people;
    //                 if ($remainingPeople <= 0) {
    //                     break;
    //                 }
    //             }
    //             if ($remainingPeople > 0) {
    //                 session()->flash('user_message', ['type' => 'warning', 'msg' => 'لا يوجد طاولات للحجز']);
    //                 return back();
    //             }
    //         }
    //         if (Carbon::today()->format('Y-m-d') <= $request->reservation_date) {
    //             $countPeople = ShopTable::query()->whereIn('id', $countPeopleTable_ids)->get()->sum('count_people');
    //             if ($countPeople >= $request->count_people) {
    //                 $client = Client::updateorcreate(
    //                     ['mobile' => $request->mobile],
    //                     ['mobile' => $request->mobile, 'name' => $request->name],
    //                 );
    //                 $reservation = Reservation::query()->create($this->validateItem($request->merge(['client_id' => $client->id]), 'create', -1));
    //                 $this->addTableReservation($request, $countPeopleTable_ids, $reservation);

    //                 if ($shopSetting->payment_method == 2) {
    //                     $reservation->status = 0;
    //                     $reservation->save();
    //                     session()->flash('user_message', ['type' => 'success', 'msg' => 'تم الاضافة بنجاح']);
    //                     return Inertia::location(route('success.callback.payment',$reservation->id));
    //                 } else {
    //                     $reservation->status = 3;
    //                     $reservation->save();
    //                     $paymentLink = $this->createPaymentUrl($reservation, $reservation->total_price, $client->name, $client->mobile,);
    //                     return Inertia::location($paymentLink);
    //                 }
    //             } else {
    //                 session()->flash('user_message', ['type' => 'warning', 'msg' => 'لا يوجد طاولات للحجز']);
    //             }
    //         } else {
    //             session()->flash('user_message', ['type' => 'warning', 'msg' => ' التاريخ المختار منتهي']);
    //             return back();
    //         }
    //     } else {
    //         session()->flash('user_message', ['type' => 'warning', 'msg' => 'لا يوجد طاولات للحجز']);
    //     }
    //     return back();
    // }

    public function storeForm(Request $request){
        $validate_arr = [
            'shop_id'          => 'required',
            'name'             => 'required',
            'mobile'           => 'required|numeric',
            'count_people'     => 'required|numeric',
            'reservation_time' => 'required',
            'reservation_date' => 'required',
            'notes'            => '',
            'service_id'       => 'required',
            'shop_table_id'    => '',
            'type_occasion_id' => '',
        ];
        $request->validate($validate_arr, [
            'name.required'             => 'حقل الاسم مطلوب',
            'mobile.required'           => 'حقل رقم الجوال مطلوب',
            'mobile.numeric'            => 'رقم الجوال المدخل  غير صحيح',
            'count_people.required'     => 'حقل  عدد الاشخاص مطلوب',
            'count_people.numeric'      => 'يرجى ادخال  ارقام فقط',
            'reservation_time.required' => 'حقل  وقت الحجز مطلوب',
            'reservation_date.required' => 'حقل تاريخ الحجز مطلوب',
            'service_id.required'       => 'حقل نوع الحجز مطلوب'
        ]);
        $shopSetting = ShopSetting::query()->where('shop_id', $request->shop_id)->first();
        $services = ShopTable::query()->where('shop_id', $request->shop_id)->where('id', $request->service_id)->first();
        if($request->count_people <  $services->minimum_number){
            $message  = 'اقل عدد للأشخاص متاح لهذة الخدمة هو' .' '.  $services->minimum_number ;
            session()->flash('user_message', ['type' => 'warning', 'msg' => $message]);
            return back();
        }
        $reservation = Reservation::with('reservationTables')->where(['shop_id'=>$request->shop_id,'reservation_date'=>$request->reservation_date])->get();
        $reservation_time = strtotime(Carbon::createFromFormat('H:i A', $request->reservation_time)->format('H:i:s'));
        if($reservation->count() > 0){
            if($shopSetting->wait_reservation > 0 ){
                foreach($reservation as $row){
                    if($row->reservationTables[0]->shop_table_id == $request->service_id){
                        if($reservation_time >= strtotime($row->reservation_time)){
                            $watingTime = ($reservation_time - strtotime($row->reservation_time)) / 60;
                            if($watingTime < $shopSetting->wait_reservation){
                                $message = "يوجد حجز في نفس الموعد برجاء اختار موعد اخر";
                                session()->flash('user_message', ['type' => 'warning', 'msg' => $message]);
                                return back();
                            }
                        }else{
                            $watingTime = (strtotime($row->reservation_time) - $reservation_time ) / 60;
                            if($watingTime < $shopSetting->wait_reservation){
                                $message = "يوجد حجز في نفس الموعد برجاء اختار موعد اخر";
                                session()->flash('user_message', ['type' => 'warning', 'msg' => $message]);
                                return back();
                            }
                        }
                    }
                }
            }
        }
        $client = Client::updateorcreate(
            ['mobile' => $request->mobile],
            ['mobile' => $request->mobile, 'name' => $request->name],
        );
        $reservationService = Reservation::query()->create($this->validateItem($request->merge(['client_id' => $client->id]), 'create', -1));
        ReservationTable::query()->create([
            'reservation_id'    => $reservationService->id,
            'reservation_date'  => $reservationService->reservation_date,
            'shop_table_id'     => $request->service_id,
            'status' => 0,
        ]);

        if ($shopSetting->payment_method == 2) {
            $reservationService->status = 0;
            $reservationService->save();
            session()->flash('user_message', ['type' => 'success', 'msg' => 'تم الاضافة بنجاح']);
            return Inertia::location(route('success.callback.payment',$reservationService->id));
        } else {
            $reservationService->status = 3;
            $reservationService->save();
            $paymentLink = $this->createPaymentUrl($reservationService, $reservationService->total_price, $client->name, $client->mobile);
            return Inertia::location($paymentLink);
        }
    }
    public function storeNewForm(Request $request){
        //return $request;
        $validate_arr = [
            'shop_id'          => 'required',
            'name'             => 'required',
            'mobile'           => 'required|numeric',
            'count_people'     => 'required|numeric',
            'reservation_time' => '',
            'reservation_date' => 'required',
            'notes'            => '',
            //'service_id'       => 'required',
            'shop_table_id'    => '',
            'type_occasion_id' => '',
        ];
        $request->validate($validate_arr, [
            'name.required'             => 'حقل الاسم مطلوب',
            'mobile.required'           => 'حقل رقم الجوال مطلوب',
            'mobile.numeric'            => 'رقم الجوال المدخل  غير صحيح',
            'count_people.required'     => 'حقل  عدد الاشخاص مطلوب',
            'count_people.numeric'      => 'يرجى ادخال  ارقام فقط',
            'reservation_time.required' => 'حقل  وقت الحجز مطلوب',
            'reservation_date.required' => 'حقل تاريخ الحجز مطلوب',
        ]);
        $shopSetting = ShopSetting::query()->where('shop_id', $request->shop_id)->first();
        $services = ShopTable::query()->where('shop_id', $request->shop_id)->where('id', $request->service_id)->first();
        $reservation = Reservation::where(['shop_id'=>$request->shop_id,'reservation_date'=>$request->reservation_date])->get();
        $client = Client::updateorcreate(
            ['mobile' => $request->mobile],
            ['mobile' => $request->mobile, 'name' => $request->name],
        );
        $reservationService = Reservation::query()->create($this->validateItem($request->merge(['client_id' => $client->id]), 'create', -1));
        $totalPrice = 0;
        foreach($request->getDataServices as $row){
            if($row['initialCounter'] > 0){
                ReservationTable::query()->create([
                    'reservation_id'    => $reservationService->id,
                    'reservation_date'  => $reservationService->reservation_date,
                    'shop_table_id'     => $row['id'], 
                    'count'             => $row['initialCounter'],
                    'status' => 0,
                ]);
                $totalPrice += $row['price'] * $row['initialCounter'];
            }
        }

        if ($shopSetting->payment_method == 1) {
            $reservationService->status = 0;
            $reservationService->save();
            session()->flash('user_message', ['type' => 'success', 'msg' => 'تم الاضافة بنجاح']);
            return Inertia::location(route('success.callback.payment',$reservationService->id));
        } else {
            $reservationService->status = 3;
            $reservationService->save();
            $PaymentMethodId = $request->paymenttype ?? 1;
            $paymentLink = $this->createPaymentUrl($reservationService, $totalPrice, $client->name, $client->mobile,$PaymentMethodId);
            return Inertia::location($paymentLink);
        }
    }

    protected function validateItem(Request $request, $form_name, $item_id): array
    {
        $validate_arr = [
            'shop_id' => 'required',
            'name' => 'required',
            'mobile' => 'required|numeric',
            'count_people' => 'required|numeric',
            'reservation_time' => '',
            'reservation_date' => 'required',
            'notes' => '',
            'shop_table_id' => '',
            'type_occasion_id' => '',
            'table_type' => '',
            'client_id' => '',
            'emp_id'    => '',
            'casher_id' => '',
        ];
        $res = $request->validate($validate_arr, [
            'name.required' => 'حقل الاسم مطلوب',
            'mobile.required' => 'حقل رقم الجوال مطلوب',
            'mobile.numeric' => 'رقم الجوال المدخل  غير صحيح',
            'count_people.required' => 'حقل  عدد الاشخاص مطلوب',
            'count_people.numeric' => 'يرجى ادخال  ارقام فقط',
            'reservation_time.required' => 'حقل  وقت الحجز مطلوب',
            'reservation_date.required' => 'حقل تاريخ الحجز مطلوب',
            'table_type.required' => 'حقل نوع الطاولة مطلوب',
            'client_id.required' => 'حقول بيانات المستفيد مطلوبة',
        ]);
        if($res['reservation_time'] != '' && $res['reservation_time'] != null){
            $res['reservation_time'] = Carbon::createFromFormat('h:i A', $res['reservation_time'])->format('H:i');
        }
        $shopSetting = ShopSetting::query()->where('shop_id', $request->shop_id)->first();
        if ($shopSetting->payment_method == 0) {
            $res['total_price'] = $shopSetting->payment_value * $request->count_people;
        } else if ($shopSetting->payment_method == 1) {
            $res['total_price'] = $shopSetting->payment_value;
        }
        return $res;
    }

    protected function addTableReservation(Request $request, $countPeopleTables, $reservation)
    {
        foreach ($countPeopleTables as $countPeopleTable) {
            ReservationTable::query()->create([
                'reservation_id' => $reservation->id,
                'reservation_date' => $reservation->reservation_date,
                'shop_table_id' => $countPeopleTable,
                'status' => 0,

            ]);
        }
        return back();
    }

    public function visitorCount()
    {
        $lastVisit = request()->cookie('last_visit');
        $count = request()->cookie('visitor_count');
        $shop_id = request()->cookie('shop_id');
        if (!$lastVisit || \Carbon\Carbon::parse($lastVisit)->diffInMinutes(\Illuminate\Support\Carbon::now()) >= 60) {
            if (!$count)
                $count = Visitor::firstOrCreate(['shop_id' => $shop_id])->count;


            $count++;
            $visitor = Visitor::first();
            $visitor->count = $count;
            $visitor->shop_id = $shop_id;
            $visitor->save();
            return $count;
        } else {
            return $count;
        }

    }

    private function getShop(mixed $slug = null)
    {
        $shop = null;
        if (request()->filled('hash')) {
            $HashedCommercialRegistrationNo = request()->get('hash');
            $shopSettings = ShopSetting::whereNotNull('commercial_registration_no')->get();
            foreach ($shopSettings as $shopSetting) {
                if (Hash::check($shopSetting->commercial_registration_no, $HashedCommercialRegistrationNo)) {
                    return Shop::find($shopSetting->shop_id);
                }
            }
        } else if ($slug) {
            $shop = Shop::query()->where('slug', $slug)->first();
        }
        if ($shop)
            return $shop;
        else
            abort(404);
    }
    private function getCashier(mixed $slug = null)
    {
        $shop = null;
        if (request()->filled('hash')) {
            $HashedCommercialRegistrationNo = request()->get('hash');
            $cashers = Casher::whereNotNull('license_number')->get();
            foreach ($cashers as $casher) {
                if (Hash::check($casher->license_number, $HashedCommercialRegistrationNo)) {
                    $shop = Shop::find($casher->shop_id);
                    return ['casher'=>$casher , 'shop'=>$shop];
                }
            }
        }
        abort(404);
    }

    public function formatPhoneNumber($phoneNumber)
    {
        $countryPrefix = '966';

        // Remove any non-digit characters from the phone number
        $cleanedNumber = preg_replace('/\D/', '', $phoneNumber);

        // Check if the number has the country prefix
        if (strpos($cleanedNumber, $countryPrefix) === 0) {
            return $cleanedNumber; // Number already has country prefix, no changes needed
        }

        // Check if the number starts with a zero
        if (strpos($cleanedNumber, '0') === 0) {
            // Remove the leading zero and add the country prefix
            $formattedNumber = $countryPrefix . substr($cleanedNumber, 1);
            return $formattedNumber;
        }
        return $cleanedNumber; // Number doesn't need any changes
    }

    public function success($reservation)
    {
        if (!$reservation) {
            $data = $this->getPaymentStatus();
            $reservation = Reservation::withoutGlobalScope('activeStatus')
                ->where('id', $data->CustomerReference)
                ->where('status', 3)
                ->where('is_whatsapp_sent', 0)
                ->first();
        }else{
            $reservationId = $reservation;
            $reservation = Reservation::where('id', $reservation)
                ->where('is_whatsapp_sent', 0)->first();
        }
        if ($reservation) {
            $client = $reservation->client->name ?? '';
            $countPeopleTable_ids = ReservationTable::where('reservation_id', $reservation->id)->get()->pluck('shopTable.title')->toArray();
            $tables_ids = (implode(', ', $countPeopleTable_ids));
            if ($reservation->shop->mobile) {
                // return $this->formatPhoneNumber($reservation->shop->mobile);
                $reservation->status = 0;
                $reservation->is_whatsapp_sent = 1;
                $reservation->save();
                $link = route('success.callback.payment',$reservation->id);
                if($reservation->reservation_time == null){
                    $reservation->reservation_time = Carbon::parse($reservation->reservation_time)->format('h:i a');
                }
                // Send whatsapp
                $message = '📥 رسالة آلية
وصلك حجز جديد في amyal booking
    رقم الحجز: ' . ($reservation->id) .'
    الحجز: ' . (implode(', ', $countPeopleTable_ids)) . '
    عدد الاشخاص: ' . ($reservation->count_people) . '
    التاريخ: ' . ($reservation->reservation_date) . '
    الوقت: ' . ($reservation->reservation_time) . '
    الرابط: '. ($link) .'';
                $messageClient = '📥 رسالة آلية
تم تأكيد حجزك في amyal booking
    رقم الحجز: ' . ($reservation->id) .'
    الحجز: ' . (implode(', ', $countPeopleTable_ids)) . '
    عدد الاشخاص: ' . ($reservation->count_people) . '
    التاريخ: ' . ($reservation->reservation_date) . '
    الوقت: ' . ($reservation->reservation_time) . '';
                if($reservation->shop->plan == "general"){
                    $messageClient = '📥 رسالة آلية
تم إرسال حجزك وفي انتظار الرد في amyal booking
    رقم الحجز: ' . ($reservation->id) .'
    الحجز: ' . (implode(', ', $countPeopleTable_ids)) . '
    عدد الاشخاص: ' . ($reservation->count_people) . '
    التاريخ: ' . ($reservation->reservation_date) . '
    الوقت: ' . ($reservation->reservation_time) . '';
                }
                $this->sendWhatsAppMessage($this->formatPhoneNumber($reservation->shop->mobile), $message , $link);
                $this->sendWhatsAppMessage($this->formatPhoneNumber($reservation->client->mobile), $messageClient , $link);

                //Send Email
                $services = Shop::where(['id'=>$reservation->shop_id])->with("category")->first()->category;
                $removedPart = substr($tables_ids, 0, -9);
                Mail::to($reservation->shop->email)->send(new SendSuccessReservationMail($reservation , $client , $tables_ids , $removedPart));
                if($reservation->casher_id != null){
                    $casher = Casher::find($reservation->casher_id);
                    if($casher){
                        $this->sendWhatsAppMessage($this->formatPhoneNumber($casher->mobile), $message , $link);
                        Mail::to($casher->email)->send(new SendSuccessReservationMail($reservation , $client , $tables_ids , $removedPart));
                    }
                }
            }
        } else {
            $reservation = Reservation::withoutGlobalScope('activeStatus')
                ->where('id', $data->CustomerReference ?? $reservationId)
                ->first();
            $countPeopleTable_ids = ReservationTable::where('reservation_id', $reservation->id)->get()->pluck('shopTable.title')->toArray();
            $client = $reservation->client->name ?? '';
            $reservation->reservation_time = Carbon::parse($reservation->reservation_time)->format('h:i a');

        }

        $tables_ids = (implode(', ', $countPeopleTable_ids));
        $removedPart = substr($tables_ids, 0, -9);
        $services = Shop::where(['id'=>$reservation->shop_id])->with("category")->first()->category;
        $returnMessage = "تم تأكيد حجزك بنجاح";
        if($reservation->shop->plan == "general"){
            $returnMessage = "تم إرسال حجزك وفي انتظار الرد";
        }
        return Inertia::render('FormReservation/Success',
            [
                'reservations' => $reservation,
                'client'       => $client,
                'tables_ids'   => $tables_ids,
                'category'     => $removedPart,
                'returnMessage'=> $returnMessage
            ]
        );
    }
    public function fail()
    {
        return Inertia::render('FormReservation/Fail');
    }

    public function getData(Request $request){
        $services = ShopTable::query()->where(['shop_id'=>$request->shopId])
            ->where('count_people','>=',$request->people)
            ->orderByRaw('ABS(count_people - ?)', [$request->people])
            ->get();
        foreach($services as $row){
            $row->media = json_decode($row->media);
            $row->initialCounter = 0;
        }
        return ['services'=>$services];
    }

    public function checkStore(Request $request){
        $shopSetting = Shop::query()->where('slug',$request->id)->first();
        return $shopSetting;
    }
}
