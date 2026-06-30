<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Support\HomepageDefaults;
use App\Support\SeoDefaults;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function edit(): \Inertia\Response
    {
        $settings = Setting::first();
        if (!$settings) {
            $settings = Setting::query()->create(
                array_merge(HomepageDefaults::settings(), SeoDefaults::settings(), [
                    'terms_conditions' => '',
                    'privacy_policy' => '',
                    'about_us' => '',
                ])
            );
        }

        return Inertia::render('Settings/Edit', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:50',
            'phone_secondary' => 'nullable|string|max:50',
            'hero_image' => 'nullable|image|max:5120',
            'site_logo' => 'nullable|image|max:2048',
            'seo_og_image' => 'nullable|image|max:5120',
            'icon' => 'nullable|image|max:2048',
        ]);

        try {
            DB::beginTransaction();
            $setting = Setting::firstOrFail();

            $setting->phone = $request->phone;
            $setting->email = $request->email;
            $setting->phone_secondary = $request->phone_secondary;
            $setting->social_facebook = $request->social_facebook;
            $setting->social_linkedin = $request->social_linkedin;

            $setting->hero_tagline = $request->hero_tagline;
            $setting->intro_en = $request->intro_en;
            $setting->about_us_en = $request->about_us_en;
            $setting->mission = $request->mission;
            $setting->vision = $request->vision;
            $setting->goal = $request->goal;

            $setting->home_loading_message = $request->home_loading_message;
            $setting->hero_eyebrow = $request->hero_eyebrow;
            $setting->hero_badge_1_label = $request->hero_badge_1_label;
            $setting->hero_badge_1_value = $request->hero_badge_1_value;
            $setting->hero_badge_2_label = $request->hero_badge_2_label;
            $setting->hero_badge_2_value = $request->hero_badge_2_value;
            $setting->home_about_excerpt = $request->home_about_excerpt;
            $setting->story_eyebrow = $request->story_eyebrow;
            $setting->story_heading = $request->story_heading;
            $setting->story_btn_primary = $request->story_btn_primary;
            $setting->story_btn_secondary = $request->story_btn_secondary;
            $setting->pillars_eyebrow = $request->pillars_eyebrow;
            $setting->pillars_heading = $request->pillars_heading;
            $setting->featured_eyebrow = $request->featured_eyebrow;
            $setting->featured_heading = $request->featured_heading;
            $setting->featured_intro = $request->featured_intro;
            $setting->featured_stats_label = $request->featured_stats_label;
            $setting->featured_link_text = $request->featured_link_text;
            $setting->featured_btn_text = $request->featured_btn_text;

            $setting->seo_site_title = $request->seo_site_title;
            $setting->seo_meta_description = $request->seo_meta_description;
            $setting->seo_meta_keywords = $request->seo_meta_keywords;
            $setting->seo_home_title = $request->seo_home_title;
            $setting->seo_home_description = $request->seo_home_description;
            $setting->seo_about_title = $request->seo_about_title;
            $setting->seo_about_description = $request->seo_about_description;
            $setting->seo_products_title = $request->seo_products_title;
            $setting->seo_products_description = $request->seo_products_description;
            $setting->seo_contact_title = $request->seo_contact_title;
            $setting->seo_contact_description = $request->seo_contact_description;

            $setting->home_pillars = [
                [
                    'title' => $request->pillar_1_title,
                    'description' => $request->pillar_1_description,
                ],
                [
                    'title' => $request->pillar_2_title,
                    'description' => $request->pillar_2_description,
                ],
                [
                    'title' => $request->pillar_3_title,
                    'description' => $request->pillar_3_description,
                ],
            ];

            $setting->home_trust_items = [
                ['value' => $request->trust_1_value, 'label' => $request->trust_1_label],
                ['value' => $request->trust_2_value, 'label' => $request->trust_2_label],
                ['value' => $request->trust_3_value, 'label' => $request->trust_3_label],
            ];

            if ($request->hasFile('icon')) {
                $this->deletePublicFile($setting->icon_url);
                $setting->icon = $this->saveFile($request->file('icon'), 'assets/clients');
            }

            if ($request->hasFile('hero_image')) {
                $this->deleteHeroImage($setting->hero_image);
                $setting->hero_image = $this->saveHeroImage($request->file('hero_image'));
            }

            if ($request->hasFile('site_logo')) {
                $this->deleteSiteLogo($setting->site_logo);
                $setting->site_logo = $this->saveHeroImage($request->file('site_logo'));
            }

            if ($request->hasFile('seo_og_image')) {
                $this->deleteHeroImage($setting->seo_og_image);
                $setting->seo_og_image = $this->saveHeroImage($request->file('seo_og_image'));
            }

            $setting->save();
            DB::commit();
            session()->flash('user_message', ['type' => 'success', 'msg' => 'Settings updated successfully']);

            return redirect('admin/settings');
        } catch (\Exception $ex) {
            DB::rollback();
            session()->flash('user_message', ['type' => 'error', 'msg' => 'Failed to update settings']);

            return redirect('admin/settings');
        }
    }

    public static function saveFile($photo, $path): string
    {
        $file = $photo->getClientOriginalExtension();
        $file_name = time() . rand(10, 1000) . '.' . $file;
        $photo->move($path, $file_name);

        return $file_name;
    }

    protected function saveHeroImage($photo): string
    {
        $dir = public_path('images');
        if (!File::isDirectory($dir)) {
            File::makeDirectory($dir, 0755, true);
        }

        $fileName = time() . '_' . Str::random(6) . '.' . $photo->getClientOriginalExtension();
        $photo->move($dir, $fileName);

        return $fileName;
    }

    protected function deleteHeroImage(?string $filename): void
    {
        if (!$filename) {
            return;
        }

        $defaults = ['hero-berries.jpg'];
        if (in_array($filename, $defaults, true)) {
            return;
        }

        $path = public_path('images/' . $filename);
        if (File::exists($path)) {
            File::delete($path);
        }
    }

    protected function deleteSiteLogo(?string $filename): void
    {
        if (!$filename || $filename === 'logo.png') {
            return;
        }

        $path = public_path('images/' . $filename);
        if (File::exists($path)) {
            File::delete($path);
        }
    }

    public static function deletePublicFile($image): void
    {
        if ($image) {
            File::delete(trim($image, url('')));
        }
    }
}
