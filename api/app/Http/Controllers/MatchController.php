<?php

namespace App\Http\Controllers;

use App\Models\Match;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
