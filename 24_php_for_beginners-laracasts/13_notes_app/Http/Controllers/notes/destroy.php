<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

$currentUserId = 1;
$id            = $_POST["id"];

/** @noinspection SqlResolve */
$note = $db->query("select * from notes where id = :id;", [":id" => $id])->findOrFail();

authorize($note["user_id"] === $currentUserId);

/** @noinspection SqlResolve */
$db->query("delete from notes where id = :id;", [":id" => $id]);

header("location: /notes");
exit();
