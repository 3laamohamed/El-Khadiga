<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Mail\ContactFormMail;
use App\Models\Category;
use App\Models\ContactSubmission;
use App\Models\Product;
use App\Models\Setting;
use App\Support\HomepageDefaults;
use App\Support\SeoDefaults;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class PublicSiteController extends Controller
{
    private function pillars(?Setting $settings): array
    {
        $pillars = $settings?->home_pillars;

        return !empty($pillars) ? $pillars : HomepageDefaults::pillars();
    }

    private function trustItems(?Setting $settings): array
    {
        $items = $settings?->home_trust_items;

        return !empty($items) ? $items : HomepageDefaults::trustItems();
    }

    private function seoPayload(?Setting $settings): array
    {
        $defaults = SeoDefaults::settings();

        return [
            'site_title' => $settings?->seo_site_title ?? $defaults['seo_site_title'],
            'meta_description' => $settings?->seo_meta_description ?? $defaults['seo_meta_description'],
            'meta_keywords' => $settings?->seo_meta_keywords ?? $defaults['seo_meta_keywords'],
            'og_image_url' => $settings?->seo_og_image_url,
            'pages' => [
                'home' => [
                    'title' => $settings?->seo_home_title ?? $defaults['seo_home_title'],
                    'description' => $settings?->seo_home_description ?? $defaults['seo_home_description'],
                ],
                'about' => [
                    'title' => $settings?->seo_about_title ?? $defaults['seo_about_title'],
                    'description' => $settings?->seo_about_description ?? $defaults['seo_about_description'],
                ],
                'products' => [
                    'title' => $settings?->seo_products_title ?? $defaults['seo_products_title'],
                    'description' => $settings?->seo_products_description ?? $defaults['seo_products_description'],
                ],
                'contact' => [
                    'title' => $settings?->seo_contact_title ?? $defaults['seo_contact_title'],
                    'description' => $settings?->seo_contact_description ?? $defaults['seo_contact_description'],
                ],
            ],
        ];
    }

    public function seo(): JsonResponse
    {
        $settings = Setting::first();

        return response()->json([
            'status' => true,
            'data' => $this->seoPayload($settings),
        ]);
    }

    public function home(): JsonResponse
    {
        $settings = Setting::first();
        $defaults = HomepageDefaults::settings();

        $featured = Product::query()
            ->with('category')
            ->where('is_featured', true)
            ->orderBy('sort_order')
            ->limit(6)
            ->get();

        return response()->json([
            'status' => true,
            'data' => [
                'loading_message' => $settings?->home_loading_message ?? $defaults['home_loading_message'],
                'hero_tagline' => $settings?->hero_tagline ?? 'Fruit & Vegetables, Frozen Fresh for the World',
                'intro' => $settings?->intro_en ?? '',
                'hero_eyebrow' => $settings?->hero_eyebrow ?? $defaults['hero_eyebrow'],
                'hero_badge_1_label' => $settings?->hero_badge_1_label ?? $defaults['hero_badge_1_label'],
                'hero_badge_1_value' => $settings?->hero_badge_1_value ?? $defaults['hero_badge_1_value'],
                'hero_badge_2_label' => $settings?->hero_badge_2_label ?? $defaults['hero_badge_2_label'],
                'hero_badge_2_value' => $settings?->hero_badge_2_value ?? $defaults['hero_badge_2_value'],
                'hero_image_url' => $settings?->hero_image
                    ? asset('images/' . $settings->hero_image)
                    : asset('images/' . $defaults['hero_image']),
                'logo_url' => $settings?->site_logo_url ?? asset('images/logo.png'),
                'story_eyebrow' => $settings?->story_eyebrow ?? $defaults['story_eyebrow'],
                'story_heading' => $settings?->story_heading ?? $defaults['story_heading'],
                'about_excerpt' => $settings?->home_about_excerpt ?? $settings?->intro_en ?? '',
                'story_btn_primary' => $settings?->story_btn_primary ?? $defaults['story_btn_primary'],
                'story_btn_secondary' => $settings?->story_btn_secondary ?? $defaults['story_btn_secondary'],
                'pillars_eyebrow' => $settings?->pillars_eyebrow ?? $defaults['pillars_eyebrow'],
                'pillars_heading' => $settings?->pillars_heading ?? $defaults['pillars_heading'],
                'trust_items' => $this->trustItems($settings),
                'pillars' => $this->pillars($settings),
                'featured_eyebrow' => $settings?->featured_eyebrow ?? $defaults['featured_eyebrow'],
                'featured_heading' => $settings?->featured_heading ?? $defaults['featured_heading'],
                'featured_intro' => $settings?->featured_intro ?? $defaults['featured_intro'],
                'featured_stats_label' => $settings?->featured_stats_label ?? $defaults['featured_stats_label'],
                'featured_link_text' => $settings?->featured_link_text ?? $defaults['featured_link_text'],
                'featured_btn_text' => $settings?->featured_btn_text ?? $defaults['featured_btn_text'],
                'featured_products' => ProductResource::collection($featured),
            ],
        ]);
    }

    public function about(): JsonResponse
    {
        $settings = Setting::first();

        return response()->json([
            'status' => true,
            'data' => [
                'about' => $settings?->about_us_en ?? '',
                'mission' => $settings?->mission ?? '',
                'vision' => $settings?->vision ?? '',
                'goal' => $settings?->goal ?? '',
            ],
        ]);
    }

    public function categories(): JsonResponse
    {
        $categories = Category::query()
            ->whereNotNull('slug')
            ->withCount('products')
            ->orderBy('id')
            ->get();

        return response()->json([
            'status' => true,
            'data' => CategoryResource::collection($categories),
        ]);
    }

    public function products(Request $request): JsonResponse
    {
        $query = Product::query()->with('category')->orderBy('sort_order');

        if ($request->filled('category')) {
            $slug = $request->input('category');
            $query->whereHas('category', fn ($q) => $q->where('slug', $slug));
        }

        return response()->json([
            'status' => true,
            'data' => ProductResource::collection($query->get()),
        ]);
    }

    public function product(string $slug): JsonResponse
    {
        $product = Product::query()
            ->with('category')
            ->where('slug', $slug)
            ->firstOrFail();

        return response()->json([
            'status' => true,
            'data' => new ProductResource($product),
        ]);
    }

    public function contactInfo(): JsonResponse
    {
        $settings = Setting::first();

        return response()->json([
            'status' => true,
            'data' => [
                'email' => $settings?->email ?? '',
                'phone' => $settings?->phone ?? '',
                'phone_secondary' => $settings?->phone_secondary ?? '',
                'social_facebook' => $settings?->social_facebook ?? '',
                'social_linkedin' => $settings?->social_linkedin ?? '',
                'logo_url' => $settings?->site_logo_url ?? asset('images/logo.png'),
            ],
        ]);
    }

    public function contact(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        ContactSubmission::query()->create($validated);

        $recipient = config('mail.contact_to', 'info@elkhadiga.com');

        try {
            Mail::to($recipient)->send(new ContactFormMail(
                $validated['name'],
                $validated['email'],
                $validated['message'],
            ));
        } catch (\Exception $e) {
            Log::warning('Contact form email failed', [
                'recipient' => $recipient,
                'error' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'status' => true,
            'message' => 'Thank you for your message. We will get back to you soon.',
        ]);
    }
}
