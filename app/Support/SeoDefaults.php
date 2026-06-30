<?php

namespace App\Support;

class SeoDefaults
{
    public static function settings(): array
    {
        $description = 'El-Khadiga for Export — Premium frozen IQF fruits and vegetables for international export from Egypt.';
        $brand = 'El-Khadiga for Export';

        return [
            'seo_site_title' => $brand,
            'seo_meta_description' => $description,
            'seo_meta_keywords' => 'frozen fruits, frozen vegetables, IQF, Egypt export, El Khadiga, B2B export',
            'seo_home_title' => $brand . ' | Frozen Fresh for the World',
            'seo_home_description' => $description,
            'seo_about_title' => 'About Us | ' . $brand,
            'seo_about_description' => 'Learn about El-Khadiga\'s mission to export premium IQF frozen fruits and vegetables from Egypt.',
            'seo_products_title' => 'Products | ' . $brand,
            'seo_products_description' => 'Browse our catalog of IQF frozen fruits and vegetables for international B2B export.',
            'seo_contact_title' => 'Contact | ' . $brand,
            'seo_contact_description' => 'Contact El-Khadiga for export inquiries, product details, and partnership opportunities.',
        ];
    }
}
