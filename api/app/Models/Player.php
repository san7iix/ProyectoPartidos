<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id_user');
    }
    public function team()
    {
        return $this->belongsTo('App\Models\Team', 'id_team');
    }
    public function manager()
    {
        return $this->belongsTo('App\Models\Manager', 'id_manager');
    }
}
