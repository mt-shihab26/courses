<x-layout title="{{ $job->title }}">
    <div class="space-y-2">
        <h2 class="text-lg font-bold">{{ $job->title }}</h2>
        <p>This job pays {{ $job['salary'] }} per year</p>
        @can('edit', $job)
            <x-button href="/jobs/{{ $job->id }}/edit">Edit</x-button>
        @endcan
    </div>
</x-layout>
