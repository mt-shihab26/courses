<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAuthRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "name" => ["string", "required", "max:255"],
            "username" => ["string", "required", "max:255", "min:3", "unique:users,username"],
            "email" => ["email", "required", "max:255", "unique:users,email"],
            "password" => ["string", "required", "max:255", "min:6"],
        ];
    }
}
