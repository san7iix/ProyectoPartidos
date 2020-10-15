<?php

namespace App\Http\Controllers;

use App\Models\Team;
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

        return $this->updateManager($team->id_manager);
        
        // if($this->updateManager($team->id_manager)){
        //     return [
        //         'success' => 200
        //     ];
        // }
    }

    public function updateManager($id)
    {
        $managerTeam = $this->searchTeam($id);
        return $managerTeam;
        $manager = Manager::where('id_user',$id)->get;
        $manager->id_team = $managerTeam;
        return $manager->save();
    }

    public function searchTeam($id)
    {
        $team = new Team(Team::where('id_manager',$id)->get()->all());
        // $team = Team::where('id_manager',$id)->get();
        $team = Team::where('id_manager',$id)->get();
        // $idTeam = $team->id;
        return $team;
    }


}
