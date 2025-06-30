<?php

namespace App\Http\Controllers;

use App\Mail\JobPosted;
use App\Models\JobListing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class JobListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobs = JobListing::query()
            ->with("employer")
            ->latest()
            ->paginate(10);

        return view('jobs.index', [
            'jobs' => $jobs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("jobs.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "title" => ["required", "min:3"],
            "salary" => ["required"],
        ]);

        $job = JobListing::create([
            "title" => request("title"),
            "salary" => request("salary"),
            "employer_id" => 1,
        ]);

        Mail::to($job->employer->user->email)->queue(new JobPosted($job));

        return redirect("/jobs");
    }

    /**
     * Display the specified resource.
     */
    public function show(JobListing $job)
    {
        return view('jobs.show', [
            'job' => $job,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobListing $job)
    {
        return view('jobs.edit', [
            'job' => $job,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobListing $job)
    {
        $request->validate([
            "title" => ["required", "min:3"],
            "salary" => ["required"],
        ]);

        $job->update([
            "title" => request("title"),
            "salary" => request("salary"),
        ]);

        return redirect("/jobs/{$job->id}");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobListing $job)
    {
        $job->delete();

        return redirect("/jobs");
    }
}
