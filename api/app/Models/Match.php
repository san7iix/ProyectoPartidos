<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    use HasFactory;

    //To prevent mass-assignamet exception
    protected $fillable = ['id_team_1', 'id_team_2', 'id_place', 'state', 'date'];

    public function team_1()
    {
        return $this->belongsTo('App\Models\Team', 'id_team_1');
    }
    public function team_2()
    {
        return $this->belongsTo('App\Models\Team', 'id_team_2');
    }
    public function user()
    {
        return $this->belongsTo('App\User', 'id_place');
    }

    public function state()
    {
        return $this->belongsTo('App\Models\State', 'state');
    }
}
