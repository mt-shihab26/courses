<?php

namespace App\Subscribers;


use App\Events\UserCreatedEvent;
use App\Listeners\SendWelcomeEmail;
use Illuminate\Events\Dispatcher;

class UserEventsSubscriber
{
    public function subscribe(Dispatcher $dispatcher): void
    {
        $dispatcher->listen(UserCreatedEvent::class, SendWelcomeEmail::class);
    }
}
