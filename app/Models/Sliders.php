<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sliders extends Model
{
    use HasFactory;
    protected $table = "sliders";
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
            return asset('assets/sliders') . '/' . $this->icon;
        else null;
    }
}
