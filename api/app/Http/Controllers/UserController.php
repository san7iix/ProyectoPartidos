<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Role;
use App\Models\Player;
use App\Models\Team;
use App\Models\Manager;
use App\Models\Place;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::where('id_role','<>','1');

        $data_users = $this->data_users();
        // dd($datos_select['roles'][1]->nombre[0]);

        return [
            'users' => $users,
            'data_users' => $data_users
        ];
    }

    public function data_users()
    {
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
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if ($validator->fails()) {
            return [
                'success' => $validator
            ];
        }
        $user = new User($request->all());
        $user->password = bcrypt($request->password);
        $user->email = $request->email;
        $user->id_role = $request->role_id;
        
        $user->save();
        if($user->id_role == 2){
            $player = new Player();
            $player->id_user = $user->id;
            $player->save();
            return [
                'success' => 200
            ];
        }else if($user->id_role == 3){
            $manager = new Manager();
            $manager->id_user = $user->id;
            $manager->save();
            return [
                'success' => 200
            ];
        }
        // Session::flash('message', 'Successfully');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    public function show($id)
    {
        $user = User::find($id);
        if($user->id_role == 2){//Show data player
            $data_user = $user->player;
        }else if($user->id_role == 3){//Show data manager
            $data_user = $user->manager;
        }
        return [
            'user' => $user,
            'data_user' => $data_user
        ];
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
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        if ($validator->fails()) {
            return [
                'success' => $validator
            ];
        }
        $user = User::find($id);
        $user->fill($request->all());
        $user->save();
        return [
            'success' => 200
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user->id_role == 2){
            $player = Player::where('id_user','=',$id);
            $player->delete();
            $user->delete();
            return [
                'success' => 200
            ];
        }else if($user->id_role == 3){
            $manager = Manager::where('id_user','=',$id);
            $manager->delete();
            $user->delete();
            return [
                'success' => 200
            ];
        }
        
    }
}
