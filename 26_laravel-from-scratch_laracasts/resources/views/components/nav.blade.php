<nav class="md:flex md:justify-between md:items-center">
    <div>
        <a href="/">
            <img src="/images/logo.svg" alt="Laracasts Logo" width="165" height="16">
        </a>
    </div>

    <div class="mt-8 md:mt-0 flex gap-6 items-center">
        @auth
            Welcome, {{ auth()->user()->name }}

            <form action="/logout" method="POST">
                @csrf

                <button type="submit" class="text-xs font-bold uppercase">Logout</a>

            </form>
        @else

            <a href="/register" class="text-xs font-bold uppercase">Register</a>
            <a href="/login" class="text-xs font-bold uppercase">Login</a>

        @endauth


        <a href="#newsletter"
           class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">
            Subscribe for Updates
        </a>
    </div>
</nav>
