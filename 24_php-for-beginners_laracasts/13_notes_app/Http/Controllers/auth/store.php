<?php

use Core\App;
use Core\Authenticator;
use Core\Database;
use Core\Validator;

$email    = $_POST["email"];
$password = $_POST["password"];


// validate inputs

$errors = [];

if (!Validator::email($email)) {
    $errors["email"] = "Please provide a valid email address";
}

if (!Validator::string($password, 7, 255)) {
    $errors["password"] = "Please provide a password of at least seven characters";
}

if (!empty($errors)) {
    view("auth/create.view.php", [
        "banner" => "Register new user",
        "errors" => $errors,
        "email" => $email,
        "password" => $password
    ]);
}


$db = App::resolve(Database::class);


// check if the user already exits

/** @noinspection SqlResolve */
$user = $db
    ->query("SELECT * FROM users WHERE email = :email", [":email" => $email,])
    ->find();

if ($user) {
    redirect("/");
}


// store the user in db

/** @noinspection SqlResolve */
$db->query(
    "INSERT INTO users(email, password) VALUES(:email, :password);",
    [
        "email" => $email,
        "password" => password_hash($password, PASSWORD_BCRYPT)
    ]
);

// store the user in session that, so it is in logged in
(new Authenticator)->login($user);

redirect("/");