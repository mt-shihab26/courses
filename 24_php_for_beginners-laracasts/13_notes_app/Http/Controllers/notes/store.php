<?php

use Core\App;
use Core\Database;
use Core\Validator;

$errors = [];

$db = App::resolve(Database::class);

$body = $_POST["body"];

if (!Validator::string($body, 1, 1000)) {
    $errors["body"] = "body no more than 1,000 characters is required!";
}

if (!empty($errors)) {
    view("notes/create.view.php", [
        "banner" => "Create Note",
        "errors" => $errors,
        "body" => $body,
    ]);
    return;
}

/** @noinspection SqlResolve */
$db->query("INSERT INTO notes(body, user_id) VALUES (:body, :userId);", [
    "body" => $body,
    "userId" => 1,
]);
header("location: /notes");
exit();
