<?php

namespace App\Http\Requests;

use App\Rules\IntegerArray;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property string $title
 * @property mixed $body
 * @property mixed $user_ids
 */
class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "title" => ["string", "required"],
            "body" => ["string", "required"],
            "user_ids" => [
                "array",
                "required",
                new IntegerArray()
//                function ($attribute, $value, $fail) {
//                    $integerOnly = collect($value)->every(fn($element) => is_int($element));
//                    if (!$integerOnly) {
//                        $fail("$attribute can only be integer.");
//                    }
//                }
            ]
        ];
    }

    public function messages(): array
    {
        return [
            "body.required" => "Please enter a value of body.",
            "title.string" => "Hey, use a string"
        ];
    }
}
