<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Additionals extends Model
{
    use HasFactory;
    protected $table = "additionals";
    protected $guarded = ['id'];
    protected $hidden = [
        'created_at',
        'updated_at',
        'icon',
        'cover'
    ];
    protected $appends =[
        'icon_url',
        'cover_url'
    ];
    public function getIconUrlAttribute(){
        if ($this->icon)
            return asset('assets/additionals') . '/' . $this->icon;
        else null;
    }

    public function getCoverUrlAttribute(){
        if ($this->cover)
        return asset('assets/additionals') . '/' . $this->cover;
        else null;
    }
}
