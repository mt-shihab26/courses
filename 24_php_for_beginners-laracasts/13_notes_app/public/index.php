<?php
use Core\Router;
use Core\Session;

session_start();

const BASE_PATH = __DIR__ . "/../";

require BASE_PATH . "vendor/autoload.php";

require BASE_PATH . "Core/functions.php";

//spl_autoload_register(function (string $className) {
//    $className = str_replace("\\", DIRECTORY_SEPARATOR, $className);
//    require base_path("$className.php");
//});


require base_path("bootstrap.php");

$router = new Router();

require base_path("routes.php");

$path   = parse_url($_SERVER["REQUEST_URI"])["path"];
$method = $_POST["_method"] ?? $_SERVER["REQUEST_METHOD"];

try {
    $router->run($path, $method);
} catch (Exception $e) {
    dd($e);
}

Session::removeFlash();