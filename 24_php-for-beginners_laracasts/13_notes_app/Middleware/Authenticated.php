<?php

namespace Middleware;

use Core\Session;

class Authenticated
{
    public function handle(): void
    {
        if (!Session::has("user")) {
            header('location: /');
            exit();
        }
    }
}