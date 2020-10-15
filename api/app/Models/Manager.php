<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id');
    }
    public function team()
    {
        return $this->hasOne('App\Models\Team', 'id_team');
    }
    public function team_id(){
        return $this->belongsTo('App\Models\Team', 'id_user');
    }
    public function players()
    {
        return $this->hasMany('App\Models\Player', 'id');
    }
}
