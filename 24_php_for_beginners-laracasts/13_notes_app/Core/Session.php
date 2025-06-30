<?php

namespace Core;

class Session
{
    protected const _FLASH = "_flash";
    public static function get(string $key, $default = null)
    {
        return $_SESSION[$key] ?? $default;
    }
    public static function has(string $key): bool
    {
        return (bool) self::get($key);
    }
    public static function set(string $key, $value): void
    {
        $_SESSION[$key] = $value;
    }
    public static function remove(?string $key = null): void
    {
        if ($key) {
            unset($_SESSION[$key]);
        } else {
            $_SESSION = [];
        }
    }
    public static function destroy(): void
    {
        self::remove();
        session_destroy();

        $params = session_get_cookie_params();
        setcookie(
            'PHPSESSID',
            '',
            time() - 3600,
            $params['path'],
            $params['domain'],
            $params['secure'],
            $params['httponly']
        );
    }
    public static function getFlash(string $key, $default = null)
    {
        return self::get(self::_FLASH)[$key] ?? $default;
    }
    public static function addFlash(string $key, $value): void
    {
        $_SESSION[self::_FLASH][$key] = $value;
    }
    public static function removeFlash(): void
    {
        self::remove(self::_FLASH);
    }
}