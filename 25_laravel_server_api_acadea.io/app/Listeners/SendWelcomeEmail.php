<?php

namespace App\Listeners;

use App\Events\UserCreatedEvent;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserCreatedEvent $userCreatedEvent): void
    {
        Mail::to($userCreatedEvent->user)
            ->send(new WelcomeMail($userCreatedEvent->user));
    }
}
