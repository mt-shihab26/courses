<?php

namespace App\Providers;

use App\Models\JobListing;
use App\Policies\JobPolicy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::preventLazyLoading();

        Password::defaults(function () {
            return Password::min(4);
        });

        Gate::policy(JobListing::class, JobPolicy::class);
    }
}
