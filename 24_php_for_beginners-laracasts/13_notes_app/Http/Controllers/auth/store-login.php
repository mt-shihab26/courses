<?php

use Core\Authenticator;
use Core\Session;
use Http\Forms\LoginForm;

$email    = $_POST["email"];
$password = $_POST["password"];

$loginForm = new LoginForm();

if ($loginForm->validate($email, $password)) {
    if ((new Authenticator)->attempt($email, $password)) {
        redirect("/");
    }
    $loginForm->addError(
        "password",
        "No matching account found for that email address and password."
    );
}

Session::addFlash("errors", $loginForm->getErrors());
Session::addFlash("old", ["email" => $email]);

redirect("/auth/login");