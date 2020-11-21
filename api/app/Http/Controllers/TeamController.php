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
    public function __construct()
    {
        $this->middleware('auth');
        
    }


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

    

    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showTeam($id)
    {
        $data = Team::select('teams.name', 'players.id_user as player', 'users.name as name_user')
                ->join('players', 'players.id_team', '=', 'teams.id')
                ->join('users', 'users.id', '=', 'players.id_user')
                ->where('teams.id',$id)
                ->get();

        $data2 = Team::select('teams.name', 'managers.id_user as manager', 'users.name as name_user')
            ->join('managers', 'teams.id_manager', '=', 'managers.id_user')
            ->join('users', 'users.id', '=', 'managers.id_user')
            ->where('teams.id',$id)
            ->get();

        return [
            'players' => $data,
            'manager' => $data2
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
