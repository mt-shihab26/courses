<?php

namespace App\Http\Controllers;

use App\Contracts\EmailMarketer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class NewsletterController extends Controller
{
    /**
     * @throws ValidationException
     */
    public function __invoke(Request $request, EmailMarketer $emailMarketer): RedirectResponse
    {
        $request->validate([
            "email" => ["required", "email"]
        ]);

        try {
            $response = $emailMarketer->subscribeToNewsletter(request("email"));
        } catch (Throwable $th) {
            throw ValidationException::withMessages(["email" => "Email is invalid"]);
        }

        return redirect("/")->with("success", "You are now signed up for our newsletter");
    }
}
