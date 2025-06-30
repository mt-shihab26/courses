<x-layout title="Login" heading="Login">
    <form method="POST" action="/login">
        @csrf
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-full">
                        <div class="max-w-[500px]">
                            <x-label for="email">Email</x-label>
                            <div class="mt-2">
                                <x-input required type="text" name="email" id="email"
                                    autocomplete="email" placeholder="shihab@example.com"
                                    :value="old('email')" />
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
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
            <x-submit>Save</x-submit>
        </div>
    </form>
</x-layout>
