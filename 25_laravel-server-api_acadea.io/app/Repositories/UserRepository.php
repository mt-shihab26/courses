<?php

namespace App\Repositories;

use App\Base\Repository;
use App\Events\UserCreatedEvent;
use App\Events\UserDeletedEvent;
use App\Events\UserUpdatedEvent;
use App\Exceptions\GeneralJsonException;
use App\Models\User;

class UserRepository implements Repository
{
    /**
     * @throws GeneralJsonException
     */
    public static function create(array $attributes): User
    {
        $user = User::create([
            "name" => $attributes["name"],
            "email" => $attributes["email"],
            "password" => $attributes["password"]
        ]);

        if (!$user)
            throw new GeneralJsonException("Failed to create new User");

        event(new UserCreatedEvent($user));

        return $user;
    }

    /**
     * @param User $user
     * @throws GeneralJsonException
     */
    public static function update($user, array $attributes): User
    {
        $name = $attributes["name"];
        $email = $attributes["email"];
        $password = $attributes["password"];

        $updated = $user->update([
            "title" => $name ?? $user->name,
            "email" => $email ?? $user->email,
            "password" => $password ?? $user->password
        ]);

        if (!$updated)
            throw new GeneralJsonException("Could not update user");

        event(new UserUpdatedEvent($user));

        return $user;
    }

    /**
     * @param User $user
     * @throws GeneralJsonException
     */
    public static function delete($user): bool
    {
        $deleted = $user->forceDelete();
        if (!$deleted)
            throw new GeneralJsonException("Could not delete post");

        event(new UserDeletedEvent($user));

        return $deleted;
    }
}
