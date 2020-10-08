<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('id_user')->index()->unique()->nullable()->lenght(10)->unsigned();
            $table->integer('id_team')->index()->nullable()->length(10)->unsigned();
            $table->integer('id_manager')->index()->nullable()->lenght(10)->unsigned();
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
        Schema::dropIfExists('players');
    }
}
