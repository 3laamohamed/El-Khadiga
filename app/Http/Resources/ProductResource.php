<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'image' => $this->image,
            'image_url' => $this->image_url,
            'pack_sizes' => $this->pack_sizes ?? [],
            'carton_weights' => $this->carton_weights ?? [],
            'container_capacity' => $this->container_capacity,
            'shelf_life' => $this->shelf_life,
            'is_featured' => $this->is_featured,
            'sort_order' => $this->sort_order,
            'category' => $this->whenLoaded('category', fn () => [
                'id' => $this->category->id,
                'name' => $this->category->title_en,
                'slug' => $this->category->slug,
            ]),
        ];
    }
}
