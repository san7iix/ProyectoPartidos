<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;
    
    protected $fillable = ['id_match', 'id_player', 'min'];

    public function matches()
    {
        return $this->hasMany('App\Models\Match', 'id_match');
    }

    public function players()
    {
        return $this->hasMany('App\Models\Player', 'id_player');
    }
}
