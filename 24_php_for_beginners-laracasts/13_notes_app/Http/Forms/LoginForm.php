<?php

namespace Http\Forms;

use Core\Validator;

class LoginForm
{
    protected array $errors = [];
    public function validate(string $email, string $password): bool
    {
        if (!Validator::email($email)) {
            $this->errors["email"] = "Please provide a valid email address";
        }

        if (!Validator::string($password, 7, 255)) {
            $this->errors["password"] = "Please provide a password of at least seven characters";
        }

        return empty($errors);
    }
    public function getErrors(): array
    {
        return $this->errors;
    }
    public function addError(string $key, string $message): void
    {
        $this->errors[$key] = $message;
    }
}