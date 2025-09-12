<?php

use App\Helpers\RouteHelper;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/x1/reset-password/{token}', function ($token) {
    return $token;
})
    ->middleware(['guest:' . config('fortify.guard')])
    ->name('password.reset');


Route::prefix("/v1")
    ->middleware(["auth:sanctum"])
    ->group(function () {
        Route::prefix("/users")
            ->as("users.")
            ->group(function () {
                Route::get("/", [UserController::class, "index"])
                    ->name("index");
                Route::post("/", [UserController::class, "store"])
                    ->name("store");
                Route::get("/{user}", [UserController::class, "show"])
                    ->name("show")
                    ->where("user", "[0-9]+");
//            ->withoutMiddleware(["auth"]);
                Route::patch("/{user}", [UserController::class, "update"])
                    ->where("user", "[0-9]+")
                    ->name("update");
                Route::delete("/{user}", [UserController::class, "destroy"])
                    ->whereNumber("user")
                    ->name("destroy");
            });

        RouteHelper::includeRouteFiles(__DIR__ . "/api/v1");
    });

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
