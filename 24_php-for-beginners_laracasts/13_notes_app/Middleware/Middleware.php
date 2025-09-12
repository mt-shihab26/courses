<?php

namespace Middleware;

use Exception;

class Middleware
{
    public const MAP = [
        "guest" => Guest::class,
        "auth" => Authenticated::class
    ];

    /**
     * @throws Exception
     */
    public static function resolve(string $key): void
    {
        if (!$key) {
            return;
        }

        $middleware = self::MAP[$key] ?? false;

        if (!$middleware) {
            throw new Exception("No matching middleware found for key '{$key}'");
        }

        (new $middleware)->handle();
    }
}