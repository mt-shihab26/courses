<?php

namespace App\Http\Controllers;

use App\Base\Controller;
use App\Exceptions\GeneralJsonException;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use App\Notifications\PostSharedNotification;
use App\Repositories\PostRepository;
use App\Rules\IntegerArray;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Throwable;

class PostController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $pageSize = $request->page_size ?? 20;
        $posts = Post::query()->paginate($pageSize);
        return PostResource::collection($posts);
    }

    public function store(Request $request): PostResource
    {
        $payload = [
            "title" => $request->title,
            "body" => $request->body,
            "userIDs" => $request->user_ids
        ];

        $validator = Validator::make(
            $payload,
            [
                "title" => ["string", "required"],
                "body" => ["string", "required"],
                "user_ids" => [
                    "array",
                    "required",
                    new IntegerArray()
                ]
            ],
            [
                "body.required" => "Please enter a value of body.",
                "title.string" => "Hey, use a string"
            ],
            [
                "user_ids" => "USER IDS"
            ]
        );

        $validator->validate();

        $post = PostRepository::create($payload);
        return new PostResource($post);
    }

    public function show(Post $post): PostResource
    {
        return new PostResource($post);
    }

    /**
     * @throws GeneralJsonException|Throwable
     */
    public function update(UpdatePostRequest $request, Post $post): PostResource
    {
        $updatedPost = PostRepository::update($post, [
            "title" => $request->title,
            "body" => $request->body,
            "userIDs" => $request->user_ids
        ]);
        return new PostResource($updatedPost);
    }

    /**
     * @throws GeneralJsonException
     */
    public function destroy(Post $post): JsonResponse
    {
        PostRepository::delete($post);
        return $this->happy([], 204);
    }

    public function share(Request $request, Post $post)
    {
        $url = URL::temporarySignedRoute("shared.post", now()->addDays(30), [
            "post" => $post->id,
        ]);

        $users = User::query()->whereIn("id", $request->user_ids)->get();

        Notification::send($users, new PostSharedNotification($post, $url));

        return $this->happy(["url" => $url], 204);
    }
}
