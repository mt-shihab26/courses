<?php

namespace App\Traits;

trait ModelTrait
{
    public static function table()
    {
        return with(new static)->getTable();
    }
}
