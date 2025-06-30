<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;


Route::get('/', [PostController::class, "index"])->name("home");
Route::get('/posts/{post:slug}', [PostController::class, "show"]);
Route::post('/posts/{post:slug}/comments', [CommentController::class, "store"])->middleware("auth");

Route::get("/posts/create", [PostController::class, "create"]);

Route::post("/newsletter", NewsletterController::class);

Route::get("/register", [AuthController::class, "create"])->middleware("guest");
Route::post("/register", [AuthController::class, "store"])->middleware("guest");

Route::post("/logout", [AuthController::class, "logout"])->middleware("auth");

Route::get("/login", [AuthController::class, "loginForm"])->middleware("guest")->name("login");
Route::post("/login", [AuthController::class, "login"])->middleware("guest");

Route::get("/admin/posts/create", [PostController::class, "create"]);
