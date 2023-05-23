<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Student;
use App\Models\Cours;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cart>
 */
class CartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Get existing student and cours records
        $studentIds = Student::pluck('id')->toArray();
        $coursIds = Cours::pluck('id')->toArray();

        $studentId = $this->faker->randomElement($studentIds);
        $coursId = $this->faker->randomElement($coursIds);

        return [
            'student_id' => $studentId,
            'cours_id' => $coursId,
        ];
    }
}
