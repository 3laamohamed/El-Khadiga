<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Validate;
use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResourse;
use App\Models\Setting;
use App\Models\Sliders;
use App\Models\Additionals;
use App\Models\Services;
use App\Models\Category;
use App\Models\Clients;
use Illuminate\Http\Request;
use App\Traits\WhatsAppApi;
use Carbon\Carbon;
use Mail;
use App\Mail\SendSuccessReservationMail;
class WebSiteController extends Controller
{
    use WhatsAppApi;
    public function contactUs(Request $request){
        $setting = Setting::first(); 
        $message = '📥 رسالة آلية
        وصلك طلب جديد في jahez 
            الاسم: ' . $request->name . '
            الهاتف: ' . ($request->phone) . '
            الطلب: ' . ($request->order) . '
            الوقت: ' . (Carbon::now()->toDateString()) .' ';
        $this->sendWhatsAppMessage($this->formatPhoneNumber($setting->phone), $message , '');
        Mail::to($setting->email)->send(new SendSuccessReservationMail($request->name , $request->phone , $request->order));
        return ['status'=>true,'code'=>200];
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

    public function sliders(){
        $sliders = Sliders::get();
        return ['status'=>true,'code'=>200,'data'=>['sliders'=>$sliders]];
    }

    public function about(){
        $services = Services::inRandomOrder()->take(4)->get();
        $setting = Setting::get();
        return ['status'=>true,'code'=>200,'data'=>['about'=>$setting,'services'=>$services]];
    }

    public function services(){
        $category = Category::with(['services'])->get();
        $setting = Services::get();
        return ['status'=>true,'code'=>200,'data'=>['categories'=>$category]];
    }

    public function additionals(){
        $additionals = Additionals::get();
        return ['status'=>true,'code'=>200,'data'=>['additionals'=>$additionals]];
    }

    public function clients(){
        $clients = Clients::get();
        return ['status'=>true,'code'=>200,'data'=>['clients'=>$clients]];
    }
}
