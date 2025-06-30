<!doctype html>

<html lang="en_US">
<x-head/>

<body style="font-family: Open Sans, sans-serif">
<section class="px-6 py-8">

    <x-nav/>

    {{ $slot }}

    <x-footer/>
    <x-flash/>

</section>
</body>
</html>
