<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\AppHelpers;
use App\Http\Controllers\Controller;
use App\Models\Admin\Settings;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class SettingController extends Controller
{


    public function edit(): \Inertia\Response
    {
        $settings = Setting::first();
        if(!$settings){
            $settings = Setting::query()->create(
                ['terms_conditions' => '',
                    'privacy_policy' => '',
                    'about_us' => ''
                ]);
        }

         return Inertia::render('Settings/Edit', [
            'settings' => $settings,
        ]);
    }


    public function update(Request $request)
    {
        $validate_arr = [
            'terms_conditions' => '',
            'privacy_policy' => '',
            'about_us' => '',
        ];
        $request->validate($validate_arr);
        try {
            DB::beginTransaction();
            $setting = Setting::first();
            $setting->terms_conditions_ar = $request->terms_conditions_ar;
            $setting->privacy_policy_ar   = $request->privacy_policy_ar;
            $setting->about_us_ar         = $request->about_us_ar;
            $setting->intro_ar            = $request->intro_ar;
            $setting->terms_conditions_en = $request->terms_conditions_en;
            $setting->privacy_policy_en   = $request->privacy_policy_en;
            $setting->about_us_en         = $request->about_us_en;
            $setting->intro_en            = $request->intro_en;
            $setting->phone               = $request->phone;
            $setting->email               = $request->email;
            if ($request->hasFile('icon')){
                $this->deleteImage($setting->icon_url);
                $setting->icon = $this->saveFile($request->icon,'assets/clients');
            }
            $setting->save();
            DB::commit();
            session()->flash('user_message', ['type' => 'success', 'msg' => 'تم التعديل  بنجاح']);
            return redirect('admin/settings');
        } catch (\Exception $ex) {
            DB::rollback();
            session()->flash('user_message', ['type' => 'error', 'msg' => 'فشل  في التعديل']);
            return redirect('admin/settings');
        }
    }

    public static function saveFile($photo , $path){
        $file = $photo -> getClientOriginalExtension();
        $no_rand = rand(10,1000);
        $file_name = time() . $no_rand .  '.' . $file;
        $photo -> move($path , $file_name);
        return $file_name;
    }

    public static function deleteImage($iamge){
        File::delete(trim($iamge, url('')));
    }
}
