<?php

namespace Core;

class App
{
    protected static Container $container;
    public static function setContainer(Container $container): void
    {
        static::$container = $container;
    }
    public static function getContainer(): Container
    {
        return static::$container;
    }
    public static function resolve(string $key)
    {
        return static::getContainer()->resolve($key);
    }
    public static function bind(string $key, $resolver): void
    {
        static::getContainer()->bind($key, $resolver);
    }
}
