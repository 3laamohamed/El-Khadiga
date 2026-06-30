<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
class Services extends Model
{
    use HasFactory;
    protected $table = "services";
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
            return asset('assets/services') . '/' . $this->icon;
        else null;
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
