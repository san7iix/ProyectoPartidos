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


}
