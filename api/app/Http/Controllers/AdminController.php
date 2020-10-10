<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use App\Models\Player;
use App\Models\Team;
use App\Models\Manager;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        $data_user = $this->data_user();
        // dd($datos_select['roles'][1]->nombre[0]);

        return [
            'users' => $users,
            'data_user' => $data_user
        ];
    }

    public function data_user(){
        $role = Role::all();
        $player = Player::all();
        $team = Team::all();
        $manager = Manager::all();

        return [
            'role' => $role,
            'player' => $player,
            'team' => $team,
            'manager' => $manager
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
