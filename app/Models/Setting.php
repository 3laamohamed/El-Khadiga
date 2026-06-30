<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'icon',
        'hero_image',
        'site_logo',
        'seo_og_image',
    ];

    protected $casts = [
        'home_pillars' => 'array',
        'home_trust_items' => 'array',
    ];

    protected $appends = [
        'icon_url',
        'hero_image_url',
        'site_logo_url',
        'seo_og_image_url',
    ];

    public function getIconUrlAttribute()
    {
        if ($this->icon) {
            return asset('assets/clients') . '/' . $this->icon;
        }

        return null;
    }

    public function getHeroImageUrlAttribute()
    {
        if ($this->hero_image) {
            return asset('images/' . $this->hero_image);
        }

        return null;
    }

    public function getSiteLogoUrlAttribute(): string
    {
        if ($this->site_logo) {
            return asset('images/' . $this->site_logo);
        }

        return asset('images/logo.png');
    }

    public static function logoUrl(): string
    {
        return static::first()?->site_logo_url ?? asset('images/logo.png');
    }

    public function getSeoOgImageUrlAttribute(): ?string
    {
        if ($this->seo_og_image) {
            return asset('images/' . $this->seo_og_image);
        }

        if ($this->hero_image) {
            return asset('images/' . $this->hero_image);
        }

        return asset('images/hero-berries.jpg');
    }
}
