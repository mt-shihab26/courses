<x-layout title="Create new job" heading="Create Job">
    <form method="POST" action="/jobs">
        @csrf
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Create a New Job</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                    We just need a handful of details from you.
                </p>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <x-label for="title">Title</x-label>
                            <div class="mt-2">
                                <x-input required type="text" name="title" id="title"
                                    autocomplete="title" placeholder="Programmer" />
                            </div>
                            <x-error name="title" />
                        </div>
                    </div>
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <x-label for="salary">Salary</x-label>
                            <div class="mt-2">
                                <x-input required type="text" name="salary" id="salary"
                                    autocomplete="salary" placeholder="$40,000" />
                            </div>
                            <x-error name="salary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <a href="/jobs" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
            <x-submit>Save</x-submit>
        </div>
    </form>
</x-layout>
