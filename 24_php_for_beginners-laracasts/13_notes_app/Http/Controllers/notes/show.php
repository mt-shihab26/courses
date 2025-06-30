<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

$currentUserId = 1;

/** @noinspection SqlResolve */
$note = $db->query("select * from notes where id = :id;", [":id" => $_GET["id"]])->findOrFail();

authorize($note["user_id"] === $currentUserId);

view(
    "notes/show.view.php",
    [
        "banner" => "Note",
        "note" => $note
    ]
);
