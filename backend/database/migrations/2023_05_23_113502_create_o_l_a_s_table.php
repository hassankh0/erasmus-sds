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
        Schema::create('o_l_a_s', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
            $table->string("sending_institution_name");
            $table->string("sending_institution_responsible");
            $table->string("sending_institution_contact");
            $table->string("sending_institution_faculty");
            $table->string("receiving_institution_name");
            $table->string("receiving_institution_responsible");
            $table->string("receiving_institution_contact");
            $table->string("receiving_institution_faculty");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('o_l_a_s');
    }
};
