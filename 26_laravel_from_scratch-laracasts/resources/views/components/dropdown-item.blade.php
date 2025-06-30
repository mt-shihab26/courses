@props(["active"])

@php
    $classes = "block leading-6 pl-3 pr-9 text-sm hover:bg-gray-300 focus:bg-gray-300 text-left";

    if ($active) {
        $classes .= " bg-blue-500 text-white hover:text-black";
    }
@endphp

<a
    {{ $attributes(["class"=> $classes]) }}
>
    {{ $slot }}
</a>
