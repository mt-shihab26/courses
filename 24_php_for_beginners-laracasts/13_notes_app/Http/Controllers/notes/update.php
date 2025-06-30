<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);

$currentUserId = 1;

$id = $_POST["id"];
$body = $_POST["body"];

/** @noinspection SqlResolve */
$note = $db->query("select * from notes where id = :id;", [":id" => $id])->findOrFail();

authorize($note["user_id"] === $currentUserId);

$errors = [];

if (!Validator::string($body, 1, 1000)) {
    $errors["body"] = "body no more than 1,000 characters is required!";
}

if (!empty($errors)) {
    view(
        "notes/edit.view.php",
        [
            "banner" => "Edit note",
            "note" => $note,
            "body" => $body,
            "errors" => $errors,
        ]
    );
    return;
}

/** @noinspection SqlResolve */
$db->query(
    "
        UPDATE notes
        SET body = :body
        WHERE id = :id;
    ",
    [
        ":body" => $body,
        ":id" => $id,
    ]
);

header("location: /notes");
die();
