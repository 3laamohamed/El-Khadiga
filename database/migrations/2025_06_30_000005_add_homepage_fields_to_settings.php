<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            $columns = [
                'home_loading_message' => 'string',
                'hero_eyebrow' => 'string',
                'hero_badge_1_label' => 'string',
                'hero_badge_1_value' => 'string',
                'hero_badge_2_label' => 'string',
                'hero_badge_2_value' => 'string',
                'hero_image' => 'string',
                'home_about_excerpt' => 'longText',
                'story_eyebrow' => 'string',
                'story_heading' => 'string',
                'story_btn_primary' => 'string',
                'story_btn_secondary' => 'string',
                'pillars_eyebrow' => 'string',
                'pillars_heading' => 'string',
                'home_pillars' => 'json',
                'home_trust_items' => 'json',
                'featured_eyebrow' => 'string',
                'featured_heading' => 'string',
                'featured_intro' => 'longText',
                'featured_stats_label' => 'string',
                'featured_link_text' => 'string',
                'featured_btn_text' => 'string',
            ];

            foreach ($columns as $column => $type) {
                if (!Schema::hasColumn('settings', $column)) {
                    if ($type === 'json') {
                        $table->json($column)->nullable();
                    } elseif ($type === 'longText') {
                        $table->longText($column)->nullable();
                    } else {
                        $table->string($column)->nullable();
                    }
                }
            }
        });
    }

    public function down(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            $columns = [
                'home_loading_message', 'hero_eyebrow',
                'hero_badge_1_label', 'hero_badge_1_value',
                'hero_badge_2_label', 'hero_badge_2_value',
                'hero_image', 'home_about_excerpt',
                'story_eyebrow', 'story_heading',
                'story_btn_primary', 'story_btn_secondary',
                'pillars_eyebrow', 'pillars_heading',
                'home_pillars', 'home_trust_items',
                'featured_eyebrow', 'featured_heading', 'featured_intro',
                'featured_stats_label', 'featured_link_text', 'featured_btn_text',
            ];

            foreach ($columns as $column) {
                if (Schema::hasColumn('settings', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
