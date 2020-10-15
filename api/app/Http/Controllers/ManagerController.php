<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\Player;
use App\Models\Manager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ManagerController extends Controller
{
    public function storeTeam(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'id_manager' => ['required', 'unique:teams', 'integer'],
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
        
        if($this->updateManager($team->id_manager)){
            return [
                'success' => 200
            ];
        }
    }

    public function updateManager($id)
    {
        $managerTeam = $this->searchTeam($id);
        $manager = Manager::where('id_user',$id)->get();
        $manager[0]->id_team = $managerTeam;
        return $manager[0]->save();
    }

    public function searchTeam($id)
    {
        $team = Team::where('id_manager',$id)->get();
        return $team[0]->id;
    }


    public function showTeam($id)
    {
        $data = Team::select('teams.name', 'managers.id_user', 'users.name as name_user')
                ->join('managers', 'teams.id_manager', '=', 'managers.id_user')
                ->join('users', 'users.id', '=', 'managers.id_user')->where('id_manager',$id)
                ->get();

        return $data[0];
    }

    public function searchPlayers()
    {
        $data = Player::select('users.name', 'players.id_user')
                ->join('users', 'players.id_user', '=', 'users.id')->where('id_team',null)
                ->get();

        return $data[0];
    }

    public function addPlayer($id_team, $id_player){
        $team = Team::where('id',$id_team)->first();
        $player = Player::where('id_user', $id_player)->first();
        $player->id_team = $team->id;
        $player->save();
        return[
            'success' => 200
        ];
    }
}
