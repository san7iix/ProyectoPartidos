<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;

    //To prevent mass-assignamet exception
    protected $fillable = ['name', 'price'];

    public function matches()
    {
        return $this->hasMany('App\Models\Match', 'id');
    }
}
