<?php

$errors = [];

view("notes/create.view.php", [
    "banner" => "Create Note",
    "errors" => $errors
]);
