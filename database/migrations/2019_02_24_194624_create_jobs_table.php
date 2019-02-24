<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('description');
            $table->json('meta')->nullable();
            $table->integer('author_id');
            $table->integer('company_id');
            $table->integer('category_id')->default(1);
            $table->integer('type_id')->default(1);
            $table->integer('status_id')->default(1);
            $table->string('title');
            $table->timestamps();
            $table->uuid('uuid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
