<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostsAPITest extends TestCase
{
    use RefreshDatabase;

    public function test_index(): void
    {
        $loggedUser = User::factory()->create();
        $this->actingAs($loggedUser);

        $posts = Post::factory(10)->create();

        $response = $this->get('/api/v1/posts');

        $response->assertStatus(200);

        $postIDs = $posts->map(fn($post) => $post->id);

        collect($response->json("data"))
            ->each(fn($post) => $this->assertTrue(in_array($post["id"], $postIDs->toArray())));
    }

//    public function test_show(): void
//    {
//        $post = Post::factory(1)->create()->first();
//
//        $response = $this->get("/api/v1/posts/$post->id");
//
//        $response->assertStatus(200);
//
//        $this->assertSame($response->json("data.id"), $post->id);
//    }
//
//    public function test_create(): void
//    {
//        Event::fake();
//
//        $post = Post::factory()->make();
//
//        $response = $this->post("/api/v1/posts", $post->toArray());
//        Event::assertDispatched(PostCratedEvent::class);
//
//        $response->assertStatus(201);
//
//        collect($response->json("data"))
//            ->only(array_keys($post->getAttributes()))
//            ->each(function ($value, $field) use ($post) {
//                $this->assertSame(data_get($post, $field), $value, "Fillable is not same");
//            });
//    }
//
//    public function test_update(): void
//    {
//        Event::fake();
//
//        $post = Post::factory()->create();
//        $payloadPost = Post::factory()->make();
//
//        $fillable = collect((new Post)->getFillable());
//
//        $fillable->each(function ($postKey) use ($post, $payloadPost) {
//            $response = $this->patch("/api/v1/posts/$post->id", [
//                $postKey => $payloadPost[$postKey],
//            ]);
//
//            $response->assertStatus(200)->json("data");
//            Event::assertDispatched(PostUpdatedEvent::class);
//
//            $this->assertSame($payloadPost[$postKey], $post->refresh()[$postKey], "Failed to update post");
//        });
//    }
//
//    public function test_delete(): void
//    {
//        Event::fake();
//
//        $post = Post::factory()->create();
//        $response = $this->delete("/api/v1/posts/$post->id");
//        Event::assertDispatched(PostDeletedEvent::class);
//
//        $response->assertStatus(204);
//
//        $this->expectException(ModelNotFoundException::class);
//
//        Post::query()->findOrFail($post->id);
//    }
}
