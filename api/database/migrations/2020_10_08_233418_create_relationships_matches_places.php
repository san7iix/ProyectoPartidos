<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelationshipsMatchesPlaces extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('matches', function (Blueprint $table) {
            $table->foreign('id_team_1')->references('id')->on('teams');
            $table->foreign('id_team_2')->references('id')->on('teams');
            $table->foreign('id_place')->references('id')->on('places');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('matches', function (Blueprint $table) {
            $table->dropForeign(['id_team_1']);
            $table->dropForeign(['id_team_2']);
            $table->dropForeign(['id_place']);    
        });
    }
}
