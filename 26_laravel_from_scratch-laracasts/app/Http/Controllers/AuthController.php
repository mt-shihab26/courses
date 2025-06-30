<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAuthRequest;
use App\Http\Requests\StoreAuthRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\View\View;

class AuthController extends Controller
{
    public function index()
    {
    }

    public function create(): View
    {
        return view("auth.create");
    }

    public function store(StoreAuthRequest $request): string
    {
        $user = User::create($request->all());

        // session()->flash("success", "Your account has been created.");

        Auth::login($user);

        return redirect("/")->with("success", "Your account has been created.");
    }

    public function show(User $user)
    {
    }

    public function edit(User $user)
    {
    }

    public function update(Request $request, User $user)
    {
    }

    public function destroy(User $user)
    {

    }

    public function logout(): RedirectResponse
    {
        Auth::logout();

        return redirect("/")->with("success", "Goodbye!");
    }

    public function loginForm(): View
    {
        return view("auth.login");
    }

    /**
     * @throws Exception
     */
    public function login(LoginAuthRequest $request): RedirectResponse
    {
        $user = User::query()->where("email", $request->email)->first();

        if (!$user) {
            return back()
                ->withInput()
                ->withErrors(["email" => "Your provided credentials could not be verified."]);
        }

        if (!Hash::check($request->password, $user->password)) {
            return back()
                ->withInput()
                ->withErrors(["password" => "Your provided credentials could not be verified."]);
        }

        Auth::login($user);
        Session::regenerate();

        return redirect("/")->with("success", "Your are login");
    }
}
