<x-layout title="Register" heading="Register">
    <form method="POST" action="/register">
        @csrf
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <x-label for="name">Name</x-label>
                            <div class="mt-2">
                                <x-input required type="text" name="name" id="name"
                                    autocomplete="name" placeholder="Shihab Mahamud" />
                            </div>
                            <x-error name="name" />
                        </div>
                    </div>
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <x-label for="email">Email</x-label>
                            <div class="mt-2">
                                <x-input required type="text" name="email" id="email"
                                    autocomplete="email" placeholder="shihab@example.com" />
                            </div>
                            <x-error name="email" />
                        </div>
                    </div>
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <x-label for="password">Password</x-label>
                            <div class="mt-2">
                                <x-input required type="password" name="password" id="password"
                                    autocomplete="password" placeholder="" />
                            </div>
                            <x-error name="password" />
                        </div>
                    </div>
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <x-label for="password_confirmation">Confirm Password</x-label>
                            <div class="mt-2">
                                <x-input required type="password" name="password_confirmation"
                                    id="password_confirmation" autocomplete="password_confirmation"
                                    placeholder="" />
                            </div>
                            <x-error name="password_confirmation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
            <x-submit>Save</x-submit>
        </div>
    </form>
</x-layout>
