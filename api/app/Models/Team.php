<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    //To prevent mass-assignamet exception
    protected $fillable = ['name', 'uniform', 'id_manager'];

    public function manager()
    {
        return $this->belongsTo('App\Models\Manager', 'id');
    }
    public function manager_id(){
        return $this->hasOne('App\Models\Manager', 'id_manager');
    }
    public function players()
    {
        return $this->hasMany('App\Models\Player', 'id');
    }
    public function matches()
    {
        return $this->hasMany('App\Models\Match', 'id');
    }


    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'category_id');
    }
}
