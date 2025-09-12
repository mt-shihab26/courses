<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class StringHelper
{
    public static function toSlug(string $title): string
    {
        return Str::slug($title);
    }

    public static function toCapitalized(string $string): string
    {
        return ucwords($string);
    }
}
