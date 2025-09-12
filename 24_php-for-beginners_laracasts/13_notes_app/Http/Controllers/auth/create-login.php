<?php

use Core\Session;

view("auth/create-login.view.php", [
    "banner" => "Login with a Account",
    "errors" => Session::getFlash("errors", []),
    "email" => Session::getFlash("old", [])["email"] ?? "",
]);