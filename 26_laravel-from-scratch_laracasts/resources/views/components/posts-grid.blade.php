@props(["posts"])

@if(count($posts) >= 1)
    <x-post-featured-card :post="$posts[0]"/>
@endif

<div class="lg:grid lg:grid-cols-2">
    @if(count($posts) >= 2)
        <x-post-card :post="$posts[1]"/>
    @endif
    @if(count($posts) >= 3)
        <x-post-card :post="$posts[2]"/>
    @endif
</div>

<div class="lg:grid lg:grid-cols-3">
    @foreach( $posts->skip(3) as $post)
        <x-post-card :post="$post"/>
    @endforeach
</div>
