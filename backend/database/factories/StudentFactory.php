<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $firstname = fake()->firstName();
        $lastname = fake()->lastName();
        $username = substr($firstname, 0, 1) . $lastname . fake()->numberBetween(10,9999);
        $email = $username . '@example.com';
        return [
            'firstname' => $firstname,
            'lastname'=> $lastname ,
            'username' => $username,
            'email' => $email,
            'nationality' => fake()->country(),
            'phone' => fake()->phoneNumber(),
            'password' => 'password'
        ];
    }
}
