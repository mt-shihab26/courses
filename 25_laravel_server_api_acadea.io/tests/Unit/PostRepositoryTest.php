<?php

namespace Tests\Unit;

use App\Exceptions\GeneralJsonException;
use App\Models\Post;
use App\Repositories\PostRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostRepositoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_create(): void
    {
        $postRepository = $this->app->make(PostRepository::class);

        $payload = [
            "title" => "Hello",
            "body" => [],
            "userIDs" => [],
        ];

        $result = $postRepository::create($payload);

        $this->assertSame(strtolower($payload["title"]), $result->title, "The title is not matching to the payload title");
    }

    /**
     * @throws \Throwable
     */
    public function test_update()
    {
        $post = Post::factory(1)->create()[0];

        $postRepository = $this->app->make(PostRepository::class);

        $payload = [
            "title" => "Hello",
        ];

        $result = $postRepository::update($post, $payload);

        $this->assertSame(strtolower($payload["title"]), $result->title, "The title is not matching to the payload title");
    }

    /**
     * @throws \Throwable
     */
    public function test_delete_will_throw_exception_when_delete_post_that_does_not_exist()
    {
        $post = Post::factory(1)->make()->first();

        $postRepository = $this->app->make(PostRepository::class);

        $this->expectException(GeneralJsonException::class);
        $postRepository::delete($post);
    }

    /**
     * @throws \Throwable
     */
    public function test_delete()
    {
        $post = Post::factory(1)->create()->first();

        $postRepository = $this->app->make(PostRepository::class);

        $postRepository::delete($post);

        $found = Post::query()->find($post->id);

        $this->assertSame(null, $found, "Not null");
    }
}
