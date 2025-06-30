<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobListingController;
use App\Jobs\TranslateJob;
use App\Models\JobListing;
use Illuminate\Support\Facades\Route;

Route::get("/test", function () {
    $jobListing = JobListing::first();
    TranslateJob::dispatch($jobListing);

    return "Done";
});

Route::view('/', 'home', ['greeting' => 'Hello, Shihab']);
Route::view('/contact', 'contact');

Route::controller(JobListingController::class)->group(function () {
    Route::get('/jobs', "index");
    Route::get('/jobs/create', "create");
    Route::post('/jobs', "store");
    Route::get('/jobs/{job:id}', "show");

    Route::get('/jobs/{job}/edit', "edit")
        ->middleware("auth")
        ->can("edit", "job");

    Route::patch('/jobs/{job}', "update")
        ->middleware("auth")
        ->can("edit", "job");

    Route::delete('/jobs/{job}', "destroy");
});

Route::get("/register", [AuthController::class, "registerCreate"]);
Route::post("/register", [AuthController::class, "registerStore"]);

Route::get("/login", [AuthController::class, "loginCreate"])->name("login");
Route::post("/login", [AuthController::class, "loginStore"]);
Route::post("/logout", [AuthController::class, "logout"]);
