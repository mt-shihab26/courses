<?php

namespace App\Helpers;

class FactoryHelper
{
    /**
     * It's return a random model id with given model name
     *
     * If there is no record in the model it will create
     * a record and return that id
     * @param string $model
     * @return mixed
     */
    public static function getRandomModelId(string $model): mixed
    {
        $postsCount = $model::query()->count();
        if ($postsCount == 0) {
            // if record count is 0
            // we should create a new record and get the id
            $postId = $model::factory()->create()->id;
        } else {
            // generate random number between 1 and record count
            $postId = rand(1, $postsCount);
        }
        return $postId;
    }
}
