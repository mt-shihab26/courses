<?php

namespace Core;

class Validator
{
    public static function string(string $value, int $min = 1, int $max = INF): bool
    {
        $value = trim($value);
        $len   = strlen($value);

        return $min <= $len && $len <= $max;
    }
    public static function email(string $email): string|bool
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
}