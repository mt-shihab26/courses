<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function registerCreate()
    {
        return view("auth.register");
    }

    public function registerStore(Request $request)
    {
        $validated = $request->validate([
            "name" => ["required", "min:3"],
            "email" => ["required", "email"],
            "password" => ["required", "confirmed", Password::defaults()],
        ]);

        $user = User::create($validated);

        Auth::login($user);

        return redirect("/jobs");
    }

    public function loginCreate()
    {
        return view("auth.login");
    }

    public function loginStore(Request $request)
    {
        $validated = $request->validate([
            "email" => ["required", "email"],
            "password" => ["required", Password::defaults()],
        ]);

        if (! Auth::attempt($validated)) {
            throw ValidationException::withMessages([
                "email" => "Sorry, those credentials do not match",
                "password" => "Sorry, those credentials do not match",
            ]);
        }

        $request->session()->regenerate();

        return redirect("/jobs");
    }

    public function logout()
    {
        Auth::logout();

        return redirect("/");
    }
}
