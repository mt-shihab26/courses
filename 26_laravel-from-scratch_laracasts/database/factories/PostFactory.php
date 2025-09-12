<?php

namespace Database\Factories;

use App\Helpers\StringHelper;
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    protected static int $sigCounter = 1;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $sig = self::$sigCounter;
        self::$sigCounter++;

        return [
            "title" => fake()->sentence(8, false),
            "excerpt" => '<p>' . implode("</p><p>", fake()->paragraphs(2)) . '</p>',
            "body" => '<p>' . implode("</p><p>", fake()->paragraphs(6)) . '</p>',
            "published_at" => fake()->date("2020-01-01", now()),
            "slug" => fake()->unique()->slug(),
            "thumbnail" => "https://source.unsplash.com/random/1100x860?sig=$sig",
            "user_id" => fake()->numberBetween(1, 10),
            "category_id" => fake()->numberBetween(1, 30)
        ];
    }
}
