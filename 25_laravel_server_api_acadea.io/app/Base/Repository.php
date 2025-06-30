<?php

namespace App\Base;

interface Repository
{
    public static function create(array $attributes);

    public static function update($model, array $attributes);

    public static function delete($model);
}
