<?php

namespace App\Providers;

use App\Services\Geolocation;
use App\Services\Map;
use App\Services\SateLite;
use Illuminate\Support\ServiceProvider;

class GeolocationServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(Geolocation::class, function () {
            $map = new Map();
            $sataLite = new SateLite();
            return new Geolocation($map, $sataLite);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
