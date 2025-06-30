<?php

namespace Database\Seeders;

use App\Helpers\FactoryHelper;
use App\Models\Post;
use App\Models\User;
use App\Traits\DBOperation;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    use DBOperation;

    public function run(): void
    {
        $this->withTruncate("posts", function () {
            $posts = Post::factory(200)
//                ->has(Comment::factory(3), "comments")
                ->create();
            $posts->each(function (Post $post) {
                $post->users()->sync(FactoryHelper::getRandomModelId(User::class));
            });
        });
    }
}
