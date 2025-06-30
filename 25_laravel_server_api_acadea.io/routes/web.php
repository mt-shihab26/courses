<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
    return view("welcome");
});

Route::get('/shared/posts/{post}', function (\Illuminate\Http\Request $request, \App\Models\Post $post) {

    return "Specially made just for you 💕 ;) Post id: {$post->id}";

})->name('shared.post')->middleware('signed');

if (App::environment("local")) {
    Route::get("shared/video/{video}", function (\Illuminate\Http\Request $request, $video) {
//        if (!$request->hasValidSignature()) {
//            abort(401);
//        }

        return "Hello $video";
    })->name("share-video")->middleware("signed");

    Route::get("/playground", function () {
//        \App\Repositories\UserRepository::create([
//            "name" => fake()->name(),
//            "email" => fake()->safeEmail(),
//            "password" => "12345"
//        ]);

        event(new \App\Events\PlaygroundEvent());


        return "";
//        return URL::temporarySignedRoute("share-video", now()->addSeconds(30), ["video" => 123]);
    });
}

//Lang::setLocale("bn");
//App::setLocale("bn");
//
//dd(Lang::get("auth.failed"));
//dd(__("auth.failed"));
//dd(__("auth.throttle", ["seconds" => 100]));
//dd(App::currentLocale());
//dd(App::isLocal("bn"));
//dd(trans_choice("auth.pants", 1));
//dd(trans_choice("auth.pants", 2));

//dump(trans_choice("auth.apples", -5));
//dump(trans_choice("auth.apples", 0));
//dump(trans_choice("auth.apples", 1));
//dump(trans_choice("auth.apples", 6, ["baskets" => 2]));

//dump(__("auth.welcome ", ["name" => "shihab"]));

//dd();
