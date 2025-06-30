<?php
use Core\Session;
use JetBrains\PhpStorm\NoReturn;

#[NoReturn] function abort($code = 404): void
{
    http_response_code($code);
    require base_path("views/$code.view.php");
    die();
}

/** @noinspection PhpUnused */
#[NoReturn] function dd($value): void
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
    die();
}

function isUrl(string $value): bool
{
    return $_SERVER["REQUEST_URI"] === $value;
}

function authorize(bool $condition, int $status = Core\Response::FORBIDDEN): void
{
    if (!$condition) {
        abort($status);
    }
}

function base_path(string $relativePath): string
{
    return BASE_PATH . $relativePath;
}

function view(string $file, $attributes = []): void
{
    extract($attributes);
    require base_path("views/$file");
}

#[NoReturn] function redirect(string $uri): void
{
    header("location: $uri");
    exit();
}

function logout(): void
{
    Session::destroy();
}