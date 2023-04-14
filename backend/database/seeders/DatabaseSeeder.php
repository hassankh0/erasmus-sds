<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Cours::factory(10)->create();
        \App\Models\University::factory(3)->create();
        \App\Models\Student::factory(5)->create();
        \App\Models\Cart::factory(10)->create();
    }
}
