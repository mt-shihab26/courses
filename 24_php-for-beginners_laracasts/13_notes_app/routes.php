<?php

global $router;

$router->get("/", "home.php");
$router->get("/about", "about.php");
$router->get("/contact", "contact.php");

$router->get("/notes", "notes/index.php")->only("auth");
$router->get("/note", "notes/show.php");
$router->get("/notes/create", "notes/create.php");
$router->post("/notes", "notes/store.php");
$router->delete("/notes", "notes/destroy.php");
$router->get("/notes/edit", "notes/edit.php");
$router->patch("/notes", "notes/update.php");

$router->get("/auth/register", "auth/create.php")->only("guest");
$router->post("/auth/register", "auth/store.php")->only("guest");
$router->get("/auth/login", "auth/create-login.php")->only("guest");
$router->post("/auth/login", "auth/store-login.php")->only("guest");
$router->delete("/auth", "auth/destroy.php")->only("auth");