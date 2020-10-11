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

    public function data_user()
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
        // Session::flash('message', 'Successfully');
        return [
            'success' => 200
        ];
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
        return [
            'user' => $user,
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
        $user->delete();
        return [
            'success' => 200
        ];
    }
}
