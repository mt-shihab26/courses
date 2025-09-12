<?php

namespace App\Helpers;

use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class RouteHelper
{
    public static function includeRouteFiles(string $dirPath): void
    {
        $dirIterator = new RecursiveDirectoryIterator($dirPath);

        /** @var RecursiveDirectoryIterator | RecursiveIteratorIterator $it */
        $it = new RecursiveIteratorIterator($dirIterator);

        while ($it->valid()) {
            $isValidFile =
                !$it->isDot() &&
                $it->isFile() &&
                $it->isReadable() &&
                $it->getExtension() === "php";

            if ($isValidFile) {
                require_once $it->key();
            }

            $it->next();
        }
    }
}
