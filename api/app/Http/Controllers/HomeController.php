<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $admin_role;
    protected $player_role;
    protected $manager_role;
    public function __construct()
    {
        // $this->middleware('auth');
        $this->admin_role = 1;
        $this->player_role = 2;
        $this->manager_role = 3;
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function redirect(){
        

    	if(Auth::User()->id_role == $this->admin_role){
            // redireccion si es un administrador
            return redirect()->route('home', [
                'sesion' => "admin"
            ]);
        }elseif (Auth::User()->id_role == $this->player_role){
            // redireccion si es un jugador
            return redirect()->route('home', [
                'sesion' => "player"
            ]);
    	}else if(Auth::User()->id_role == $this->manager_role){
            //redireccion si es un manager
            return redirect('home', [
                'sesion' => "manager"
            ]);
        }
    	return view('usuario.noEncontrado');
    }

    public function index()
    {
        return view('home');
    }
}
