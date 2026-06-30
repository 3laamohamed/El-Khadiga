<?php

namespace App\Support;

class HomepageDefaults
{
    public static function pillars(): array
    {
        return [
            [
                'title' => 'Quality & Safety',
                'description' => 'Highest food safety standards from harvest to freezing, with strict measures to guarantee product safety and quality.',
            ],
            [
                'title' => 'Traceability from Own Farms',
                'description' => 'Products sourced from our own farms in Egyptian fertile soils, carefully cared for without harmful substances.',
            ],
            [
                'title' => 'Sustainable Innovation',
                'description' => 'Developing new freezing techniques and expanding into international markets with strategic partnerships.',
            ],
        ];
    }

    public static function trustItems(): array
    {
        return [
            ['value' => 'IQF', 'label' => 'Freezing standard'],
            ['value' => 'B2B', 'label' => 'Export supply focus'],
            ['value' => 'EG', 'label' => 'Egyptian origin'],
        ];
    }

    public static function settings(): array
    {
        return [
            'home_loading_message' => 'Frozen Fresh for the World',
            'hero_eyebrow' => 'Egyptian IQF Export',
            'hero_badge_1_label' => 'Cold Chain',
            'hero_badge_1_value' => 'Controlled',
            'hero_badge_2_label' => 'Products',
            'hero_badge_2_value' => 'Fruits & Vegetables',
            'hero_image' => 'hero-berries.jpg',
            'story_eyebrow' => 'Who We Are',
            'story_heading' => 'Export-focused frozen produce from Egypt to the world.',
            'story_btn_primary' => 'Learn More',
            'story_btn_secondary' => 'Export Inquiry',
            'pillars_eyebrow' => 'Why El-Khadiga',
            'pillars_heading' => 'Built for reliable B2B export partnerships.',
            'featured_eyebrow' => 'Featured Products',
            'featured_heading' => 'Popular IQF products ready for export.',
            'featured_intro' => 'Explore a curated selection from our frozen fruits and vegetables catalog.',
            'featured_stats_label' => 'Selected products',
            'featured_link_text' => 'View full catalog',
            'featured_btn_text' => 'View All Products',
            'home_pillars' => self::pillars(),
            'home_trust_items' => self::trustItems(),
        ];
    }
}
