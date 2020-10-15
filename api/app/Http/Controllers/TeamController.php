<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Team;
use App\Models\Manager;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Team::all();
        return [
            'teams' => $teams
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
            'uniform' => ['required', 'string', 'max:255'],
        ]);
        if ($validator->fails()) {
            return [
                'success' => $validator
            ];
        }
        $team = new Team($request->all());
        $team->fill($request->all());
        $team->save();
        return [
            'success' => 200
        ];
    }

    public function searchPlayers()
    {
        // $players = Player::where('id_team',null)->get();
        // $users = User::where('id_role',2)->get();
        // return [
        //     'players' => $players,
        //     'users' => $users
        // ];

        $data = Player::select('users.name', 'players.id_user')
                ->join('users', 'players.id_user', '=', 'users.id')->where('id_team',null)
                ->get();

        return $data;
    }

    public function addPlayer(Request $request, $id){
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showTeam($id)
    {
        // $team = Team::where('id_manager',$id)->get();
        // $man = Manager::where('id_user',$id)->get();
        // return [
        //     'team' => $team,
        //     'manager' => $man
        // ];
        $data = Team::select('teams.name', 'managers.id_user', 'users.name as name_user')
                ->join('managers', 'teams.id_manager', '=', 'managers.id_user')
                ->join('users', 'users.id', '=', 'managers.id_user')->where('id_manager',$id)
                ->get();

        return $data;
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
            'uniform' => ['required', 'string', 'max:255'],
        ]);
        if ($validator->fails()) {
            return [
                'success' => $validator
            ];
        }
        $team = Team::find($id);
        $team->fill($request->all());
        $team->save();
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
    //Function in beta
    public function destroy($id)
    {
        $team = Team::find($id);
        $team->delete();
        return [
            'success' => 200
        ];
    }
}
