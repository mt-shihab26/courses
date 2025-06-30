<div class="relative w-32 flex lg:inline-flex items-center bg-gray-100 rounded-xl">
    <x-dropdown>
        <x-slot name="trigger">
            <div class="flex appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold text-left">
                <button>
                    {{ isset($currentCategory) ? ucwords($currentCategory->name) : "Categories" }}
                </button>
                <x-icon name="down-arrow" class="absolute pointer-events-none" style="right: 12px;"/>
            </div>
        </x-slot>
        <div>
            <x-dropdown-item
                href="/"
                :active="!$currentCategory"
            >
                All
            </x-dropdown-item>
            @foreach ($categories as $category)
                <x-dropdown-item
                    href="/?{{ http_build_query(request()->except('category', 'page')) }}&category={{ $category->slug }}"
                    :active='$currentCategory?->slug === $category->slug'
                >
                    {{ ucwords($category->name) }}
                </x-dropdown-item>
            @endforeach
        </div>
    </x-dropdown>
</div>
