<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            if (!Schema::hasColumn('settings', 'about_us_en')) {
                $table->longText('about_us_en')->nullable();
            }
            if (!Schema::hasColumn('settings', 'intro_en')) {
                $table->longText('intro_en')->nullable();
            }
            if (!Schema::hasColumn('settings', 'mission')) {
                $table->longText('mission')->nullable();
            }
            if (!Schema::hasColumn('settings', 'vision')) {
                $table->longText('vision')->nullable();
            }
            if (!Schema::hasColumn('settings', 'goal')) {
                $table->longText('goal')->nullable();
            }
            if (!Schema::hasColumn('settings', 'hero_tagline')) {
                $table->string('hero_tagline')->nullable();
            }
            if (!Schema::hasColumn('settings', 'phone_secondary')) {
                $table->string('phone_secondary')->nullable();
            }
            if (!Schema::hasColumn('settings', 'social_linkedin')) {
                $table->string('social_linkedin')->nullable();
            }
            if (!Schema::hasColumn('settings', 'social_facebook')) {
                $table->string('social_facebook')->nullable();
            }
        });
    }

    public function down(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            $columns = [
                'about_us_en', 'intro_en', 'mission', 'vision', 'goal',
                'hero_tagline', 'phone_secondary', 'social_linkedin', 'social_facebook',
            ];
            foreach ($columns as $column) {
                if (Schema::hasColumn('settings', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
