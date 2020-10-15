<?php

namespace App\Http\Controllers;

use App\Models\Match;
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
            'id_team_1'=> ['required'],
            'id_team_2'=> ['required'],
            'id_place' => ['required'],
            'date'=> ['required', 'max:255', 'string']
        ]);
        if ($validate->fails()) {
            return [
                'success' => $validate
            ];
        }

        $match->fill($request->all());
        $match->state = 1;
        $match->save();
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
        //
    }

    public function showMatchesPending($id_team)
    {
        $match = Match::where('state', 1)
        ->where('id_team_1', $id_team)
        ->orWhere('id_team_2', $id_team)
        ->get();

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
