<?php

namespace App\Helpers;

use InvalidArgumentException;

class ArithmeticHelper
{
    public static function plus(...$numbers)
    {
        if (sizeof($numbers) < 1) {
            throw new InvalidArgumentException("There has to be at least one argument)");
        }

        $s = 0;

        foreach ($numbers as $n) {
            if (!(is_float($n) || is_int($n)))
                throw new InvalidArgumentException("Arguments has to be numbers (int or float)");
            $s += $n;
        }

        return $s;
    }

    public static function minus()
    {

    }
}
