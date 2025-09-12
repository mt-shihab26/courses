<?php

namespace App\Facades;

use App\Services\Geolocation;
use Illuminate\Support\Facades\Facade;

class GeolocationFacade extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return Geolocation::class;
    }
}
