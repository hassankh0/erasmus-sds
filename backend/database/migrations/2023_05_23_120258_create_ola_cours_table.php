<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('o_l_a_cours', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('o_l_a_id');
            $table->unsignedBigInteger('cours_id');
            $table->timestamps();

            $table->foreign('o_l_a_id')->references('id')->on('o_l_a_s')->onDelete('cascade');
            $table->foreign('cours_id')->references('id')->on('cours')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ola_cours');
    }
};
