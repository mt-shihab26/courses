@props(["value"])

<div class="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">
    <form method="GET" action="/">
        @if (request("category"))
            <input type="hidden" name="category" value="{{ request("category")}}">
        @endif

        <label>
            <input
                type="text"
                name="search"
                placeholder="Find something"
                class="bg-transparent placeholder-black font-semibold text-sm placeholder-gray-500"
                value="{{ $value }}"
            >
        </label>
    </form>
</div>
