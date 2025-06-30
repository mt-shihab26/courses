<?php

namespace App\Policies;

use App\Models\JobListing;
use App\Models\User;

class JobPolicy
{
    public function edit(User $user, JobListing $job): bool
    {
        return $job->employer->user->is($user);
    }
}
