<?php

namespace Core;

class Authenticator
{
    public function attempt(string $email, string $password): bool
    {
        $db = App::resolve(Database::class);

        $user = $db
            ->query("SELECT * FROM users WHERE email = :email", [":email" => $email,])
            ->find();

        if (!$user || !password_verify($password, $user["password"])) {
            return false;
        }

        $this->login($user);

        return true;
    }

    public function login($user): void
    {
        Session::set("user", ['email' => $user["email"]]);
        session_regenerate_id(true);
    }
}