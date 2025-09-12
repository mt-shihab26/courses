@props(["trigger"])

<div x-data="{ show: false }">
    <div
        @click="show = !show"
        @click.away="show = false"
    >
        {{ $trigger }}
    </div>

    <div
        x-show="show"
        class="py-2 overflow-auto max-h-52 absolute bg-gray-100 w-full mt-2 rounded-xl z-50"
        style="display: none;"
    >
        {{ $slot }}
    </div>
</div>
