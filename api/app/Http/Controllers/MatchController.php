<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use App\Models\Match;
use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;



class MatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    /*public function __construct()
    {
        $this->middleware('auth');
        
    }*/



    public function index()
    {
        $matches = Match::all();
        return $matches;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $match = new Match($request->all());
        $validate = Validator::make($request->all(), [
            'id_team_1' => ['required'],
            'id_team_2' => ['required'],
            'id_place' => ['required'],
            'date' => ['required', 'max:255', 'string']
        ]);
        if ($validate->fails()) {
            return [
                'success' => $validate
            ];
        }

        if ($this->validateTeams($request->id_team_1, $request->id_team_2) == 1) {
            $match->fill($request->all());
            $match->state = 1;
            $match->hour = $request->hour;
            $match->save();
            return [
                'success' => 200
            ];
        } else {
            return [
                'success'=> $this->validateTeams($request->id_team_1, $request->id_team_2),
            ];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function validateTeams($id1, $id2)
    {
        $team = Team::where('id', $id1)->first();
        if ($team != null) {
            $team2 = Team::where('id', $id2)->first();
            if ($team2 != null) {
                if($id1 != $id2){
                    return true;
                }
                return 4;
            }
            return 3;
        }
        return 2;
    }

    public function showMatchesPending($id_team)
    {
        $match = Match::select('places.name as place_name', 'matches.id_team_1', 'matches.id_team_2')
            ->join('places', 'matches.id_place', '=', 'places.id')
            ->where('state', 1)
            ->where('id_team_1', $id_team)
            ->orWhere('id_team_2', $id_team)
            ->first();

        return $match;
    }



    /**
     * state = 3 -> partido finalizado
     */
    public function resultsMatch(Request $request, $id)
    {
        $match = Match::find($id);
        $match->state = 3;
        $match->save();
        if($this->searchPlayers($request->id))
        {
            if($request->goal_t1 > 0){
                $response = $this->resultsGoal($request, $match->id);
                if($response){
                    return [
                        'success' => 200
                    ];
                }
            }else if($request->goal_t2 > 0){
                $response = $this->resultsGoal($request, $match->id);
                if($response){
                    return [
                        'success' => 200
                    ];
                }
            }
        }
    }

    public function searchPlayers($id)
    {
        $players = Player::where('id', $id)
                            ->get();
        // return $players->map(function($player){
        //     return $player_ob = $this->getPlayerName($player->id_user);      
        // })->all();

        if(count($players) > 0){
            return 1;
        }

        return 0;
        
    }

    public function getPlayerName($id)
    {
        $player = User::select('name')
                            ->where('id', $id)
                            ->get();
        return $player;
    }

    public function resultsGoal($request, $id)
    {
        $goal = new Goal($request->all());
        $goal->id_match = $id;
        $goal->save();
        return true;
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
