<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Traits\DBOperation;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    use DBOperation;

    public function run(): void
    {
        $this->withTruncate("comments", function () {
            Comment::factory(5)
//                ->for(Post::factory(1), "post")
                ->create();
        });
    }
}
