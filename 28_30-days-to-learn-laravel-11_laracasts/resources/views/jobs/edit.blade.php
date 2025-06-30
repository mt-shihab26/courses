<x-layout title="Edit Job">
    <x-slot:heading>Edit Job '{{ $job->title }}'</x-slot>
    <form method="POST" action="/jobs/{{ $job->id }}">
        @csrf
        @method('PATCH')

        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <label for="title"
                                class="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div class="mt-2">
                                <input value="{{ $job->title }}" required type="text"
                                    name="title" id="title" autocomplete="title"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            @error('title')
                                <p class="mt-1 text-sm font-semibold text-red-500">
                                    {{ $message }}
                                </p>
                            @enderror
                        </div>
                    </div>
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <label for="salary"
                                class="block text-sm font-medium leading-6 text-gray-900">
                                Salary
                            </label>
                            <div class="mt-2">
                                <input value="{{ $job->salary }}" required type="text"
                                    name="salary" id="salary"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            @error('salary')
                                <p class="mt-1 text-sm font-semibold text-red-500">
                                    {{ $message }}
                                </p>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
            <div>
                <x-button as="button" form="delete-form" type="submit"
                    onclick="return confirm('Are you sure you want to delete this item?')"
                    class="hover:text-none bg-red-500 text-white hover:text-white">
                    Delete
                </x-button>
            </div>
            <div class="flex items-center justify-end gap-x-6">
                <a href="/jobs" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
                <button type="submit"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    update
                </button>
            </div>
        </div>
    </form>
    <form method="POST" action="/jobs/{{ $job->id }}" id="delete-form">
        @csrf
        @method('DELETE')
    </form>
</x-layout>
