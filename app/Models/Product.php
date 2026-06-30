<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'pack_sizes' => 'array',
        'carton_weights' => 'array',
        'is_featured' => 'boolean',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): ?string
    {
        if ($this->image) {
            return asset('images/products/' . $this->image);
        }

        return null;
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
