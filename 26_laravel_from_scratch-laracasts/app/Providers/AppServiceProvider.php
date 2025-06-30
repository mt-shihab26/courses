<?php

namespace App\Providers;

use App\Contracts\EmailMarketer;
use App\Services\MailchimpEmailMarketer;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        app()->bind(EmailMarketer::class, fn() => MailchimpEmailMarketer::build());
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Paginator::useTailwind();
    }
}
