<?php /** @noinspection PhpUnused */

namespace Database\Factories;

use App\Helpers\FactoryHelper;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Comment>
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
            "body" => [],
            "user_id" => FactoryHelper::getRandomModelId(User::class),
            "post_id" => FactoryHelper::getRandomModelId(Post::class),
        ];
    }
}
