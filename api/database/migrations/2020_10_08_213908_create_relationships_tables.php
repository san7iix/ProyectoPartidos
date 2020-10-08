<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelationshipsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('id_role')->references('id')->on('roles');
        });
        Schema::table('managers', function (Blueprint $table) {
            $table->foreign('id_team')->references('id')->on('teams');
            $table->foreign('id_user')->references('id')->on('users');            
        });
        Schema::table('players', function (Blueprint $table) {
            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_team')->references('id')->on('teams');
            $table->foreign('id_manager')->references('id')->on('managers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('relationships_tables');
    }
}
