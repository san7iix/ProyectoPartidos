<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;
    protected $fillable=['desc'];

    public function matches()
    {
        return $this->hasMany('App\Models\Match', 'state');
    }
}
