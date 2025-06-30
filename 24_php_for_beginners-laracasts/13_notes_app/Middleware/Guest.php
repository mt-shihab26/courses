<?php

namespace Middleware;

use Core\Session;

class Guest
{
    public function handle(): void
    {
        if (Session::has("user")) {
            header('location: /');
            exit();
        }
    }
}