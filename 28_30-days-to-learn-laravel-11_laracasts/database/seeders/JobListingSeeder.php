<?php

namespace Database\Seeders;

use App\Models\Employer;
use App\Models\JobListing;
use Illuminate\Database\Seeder;

class JobListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Employer::factory(10)->create();
        JobListing::factory(200)->create();
    }
}
