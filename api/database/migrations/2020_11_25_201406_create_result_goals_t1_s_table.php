<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultGoalsT1STable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('result_goals_t1', function (Blueprint $table) {
            $table->integer('id_team')->unsigned()->length(10)->index()->nullable();
            $table->integer('id_match')->unsigned()->length(10)->index()->nullable();
            $table->integer('id_place')->unsigned()->length(10)->index()->nullable();
            $table->integer('goal')->unsigned()->length(10)->index()->nullable();
            $table->integer('id_player')->unsigned()->length(10)->index()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('result_goals_t1_s');
    }
}
