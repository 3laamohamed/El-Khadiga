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
                'seo_site_title' => 'string',
                'seo_meta_description' => 'text',
                'seo_meta_keywords' => 'text',
                'seo_og_image' => 'string',
                'seo_home_title' => 'string',
                'seo_home_description' => 'text',
                'seo_about_title' => 'string',
                'seo_about_description' => 'text',
                'seo_products_title' => 'string',
                'seo_products_description' => 'text',
                'seo_contact_title' => 'string',
                'seo_contact_description' => 'text',
            ];

            foreach ($columns as $column => $type) {
                if (!Schema::hasColumn('settings', $column)) {
                    if ($type === 'text') {
                        $table->text($column)->nullable();
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
                'seo_site_title',
                'seo_meta_description',
                'seo_meta_keywords',
                'seo_og_image',
                'seo_home_title',
                'seo_home_description',
                'seo_about_title',
                'seo_about_description',
                'seo_products_title',
                'seo_products_description',
                'seo_contact_title',
                'seo_contact_description',
            ];

            foreach ($columns as $column) {
                if (Schema::hasColumn('settings', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
