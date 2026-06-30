<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $hidden = [
        'created_at',
        'updated_at',
        'icon',
        'title'
    ];
    protected $appends =[
        'icon_url',
    ];
    public function getIconUrlAttribute(){
        if ($this->icon)
            return asset('assets/clients') . '/' . $this->icon;
        else null;
    }
}
