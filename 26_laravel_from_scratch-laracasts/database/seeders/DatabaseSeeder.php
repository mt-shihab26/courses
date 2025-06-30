<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use App\Traits\SeederTrait;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use SeederTrait;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->truncate(User::class, 10);
        $this->truncate(Category::class, 30);
        $this->truncate(Post::class, 130);
        $this->truncate(Comment::class, 130);
    }
}
