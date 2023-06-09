<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'student_id' => \App\Models\Student::all()->random()->id,
            'cours_id' => \App\Models\Cours::all()->random()->id,
            'content' => fake()->text(),
            'rate' => fake()->numberBetween(0.5, 5) * 20,
            'isReported' => false, 

        ];
    }
}
