<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    //To prevent mass-assignamet exception
    protected $fillable = ['name', 'uniform'];

    public function manager()
    {
        return $this->belongsTo('App\Models\manager', 'id');
    }
    public function players()
    {
        return $this->hasMany('App\Models\Player', 'id');
    }
    public function matches()
    {
        return $this->hasMany('App\Models\Match', 'id');
    }
}
