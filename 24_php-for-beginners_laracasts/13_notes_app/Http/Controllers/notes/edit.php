<?php


use Core\App;
use Core\Database;

$currentUserId = 1;

$db = App::resolve(Database::class);

$errors = [];


/** @noinspection SqlResolve */
$note = $db->query("select * from notes where id = :id;", [":id" => $_GET["id"]])->findOrFail();

authorize($note["user_id"] === $currentUserId);

view("notes/edit.view.php", [
    "banner" => "Edit Note",
    "note" => $note,
    "errors" => $errors
]);
