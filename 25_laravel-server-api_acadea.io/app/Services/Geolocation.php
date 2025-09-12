<?php

namespace App\Services;

class Geolocation
{
    public function __construct(
        private readonly Map      $map,
        private readonly SateLite $sateLite
    )
    {
    }

    public function search(string $name): array
    {
        $locationInfo = $this->map->findAddress($name);
        return $this->sateLite->pinpoint($locationInfo);
    }
}
