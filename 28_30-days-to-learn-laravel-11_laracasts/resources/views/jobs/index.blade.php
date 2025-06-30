<x-layout title="Jobs">
    <x-slot:heading>Jobs ({{ $jobs->total() }})</x-slot:heading>
    <x-slot:links>
        <x-button href="/jobs/create">Create New Job</x-button>
    </x-slot:links>
    <div class="space-y-4">
        @foreach ($jobs as $job)
            <a href="/jobs/{{ $job['id'] }}"
                class="block rounded-lg border border-gray-200 px-4 py-6">
                <div class="text-sm font-bold text-blue-500">{{ $job->employer->name }}</div>
                <div>
                    <strong>{{ $job['title'] }}:</strong>
                    Pays {{ $job['salary'] }} per year
                </div>
            </a>
        @endforeach

        <div>
            {{ $jobs->links() }}
        </div>
    </div>
</x-layout>
