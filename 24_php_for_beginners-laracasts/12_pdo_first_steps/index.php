<?php

require "functions.php";
require "Database.php";

// connect to MYSQL database

$config = require("config.php");

$db = new Database($config["database"]);

$id = $_GET["id"];

$post = $db->query("select * from posts where id = :id", [":id" => $id])->fetch();

dd($post);