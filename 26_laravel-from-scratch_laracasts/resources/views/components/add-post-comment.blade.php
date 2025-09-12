@props(["post_slug"])

<form action="/posts/{{ $post_slug }}/comments" method="post"
      class="flex flex-col gap-5 border border-gray-200 p-6 rounded-xl bg-gray-100">
    @csrf

    <header class="flex gap-4 items-center">
        <img
            src="https://i.pravatar.cc/60?sig={{ auth()->id() }}"
            alt=""
            width="40"
            height="40"
            class="rounded-full"
        />
        <h2>Want to participate?</h2>
    </header>

    <div>
        <label for="body">

        </label>
        <textarea
            name="body"
            id="body"
            cols="30"
            rows="5"
            class="w-full rounded-xl p-3"
            placeholder="Quick, thing of something to say!"
            required
        ></textarea>

        @error('body')
        <span class="text-xs text-red-500">{{ $message }}</span>
        @enderror
    </div>

    <div class="flex justify-end">
        <button type="submit"
                class="bg-blue-500 text-white uppercase font-semibold text-xs py-2 px-10 rounded-2xl hover:bg-blue-600">
            Comment
        </button>
    </div>
</form>
