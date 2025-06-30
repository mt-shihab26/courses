<?php

namespace Database\Seeders;

use App\Models\User;
use App\Traits\DBOperation;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    use DBOperation;

    public function run(): void
    {
        $this->withTruncate("users", function() {
            User::factory(10)->create();
        });
    }
}
