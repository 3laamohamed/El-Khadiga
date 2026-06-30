<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = "categories";
    protected $guarded = ['id'];
    protected $hidden = [
        'created_at',
        'updated_at',
        'icon'
    ];
    protected $appends =[
        'icon_url',
    ];
    public function getIconUrlAttribute(){
        if ($this->icon)
            return asset('assets/category') . '/' . $this->icon;
        else null;
    }

    public function services(){
        return $this->hasMany(Services::class,'category_id','id');
    }

    public function products(){
        return $this->hasMany(Product::class, 'category_id', 'id');
    }
}
