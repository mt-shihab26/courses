<?php

namespace App\Http\Controllers;

use App\Base\Controller;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{
    public function index(): JsonResponse
    {
        return $this->happy(Comment::query()->get());
    }

    public function store(StoreCommentRequest $request): JsonResponse
    {
        $comment = Comment::query()->create([
            "body" => $request->body,
            "post_id" => $request->post_id,
            "user_id" => $request->user()->id,
        ]);
        return $this->happy($comment, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment): JsonResponse
    {
        return $this->happy($comment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment): JsonResponse
    {
        $updated = $comment->update([
            "body" => $request->body,
        ]);

        if (!$updated) {
            return $this->error(["Could not update comment"], 500);
        }

        return $this->happy($comment);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment): JsonResponse
    {
        $deleted = $comment->forceDelete();

        if (!$deleted) {
            return $this->error(["Could not delete comment"], 500);
        }

        return $this->happy([], 204);
    }
}
