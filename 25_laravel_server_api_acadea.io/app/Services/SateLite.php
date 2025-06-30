<?php

namespace App\Services;

class SateLite
{
    public function pinpoint(array $locationInfo): array
    {
        return [
            "info" => $locationInfo,
            "points" => [12, 34]
        ];
    }
}
