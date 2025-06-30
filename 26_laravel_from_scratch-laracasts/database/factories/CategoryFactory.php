<?php

namespace Database\Factories;

use App\Helpers\StringHelper;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => StringHelper::toCapitalized(fake()->word()),
            "slug" => fake()->unique()->slug()
        ];
    }
}
