<?php

namespace App\Repositories;

use App\Base\Repository;
use App\Events\PostCratedEvent;
use App\Events\PostDeletedEvent;
use App\Events\PostUpdatedEvent;
use App\Exceptions\GeneralJsonException;
use App\Models\Post;
use Illuminate\Support\Facades\DB;
use Throwable;

class PostRepository implements Repository
{
    public static function create(array $attributes): Post
    {
        $title = $attributes["title"];
        $body = $attributes["body"];
        $userIDs = $attributes["userIDs"];

        return DB::transaction(function () use ($title, $body, $userIDs) {
            /* @var $post Post */
            $post = Post::query()->create([
                "title" => $title,
                "body" => $body
            ]);

            $post->users()->sync($userIDs);

            event(new PostCratedEvent($post));

            return $post;
        });
    }

    /**
     * @param Post $post
     * @throws Throwable
     */
    public static function update($post, array $attributes): Post
    {
        $title = $attributes["title"] ?? null;
        $body = $attributes["body"] ?? null;

        $updated = $post->update([
            "title" => $title ?? $post->title,
            "body" => $body ?? $post->body,
        ]);

        throw_if(!$updated, GeneralJsonException::class, "Could not update post");

//        if (!$updated) {
//            throw new GeneralJsonException("Could not update post");
//        }

        event(new PostUpdatedEvent());
        return $post;
    }

    /**
     * @param Post $post
     * @throws GeneralJsonException
     */
    public static function delete($post): bool
    {
        $deleted = $post->forceDelete();
        if (!$deleted)
            throw new GeneralJsonException("Could not delete post");

        event(PostDeletedEvent::class);
        return $deleted;
    }
}
