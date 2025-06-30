<?php

namespace App\Services;

class Map
{
    public function findAddress(string $name): array
    {
        return [
            "name" => $name
        ];
    }
}
