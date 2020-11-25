<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultsT2STable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('results_t2', function (Blueprint $table) {
            $table->integer('id_team')->unsigned()->length(10)->index()->nullable();
            $table->integer('id_match')->unsigned()->length(10)->index()->nullable();
            $table->integer('id_place')->unsigned()->length(10)->index()->nullable();
            $table->integer('goals_f')->unsigned()->length(10)->index()->nullable();
            $table->integer('goals_c')->unsigned()->length(10)->index()->nullable();
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
        Schema::dropIfExists('results_t2_s');
    }
}