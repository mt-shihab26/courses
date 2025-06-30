<?php

use Illuminate\Support\Facades\Route;


Route::apiResource("comments", \App\Http\Controllers\CommentController::class);
