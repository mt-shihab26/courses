const EmailSubscribeCard = () => {
    return (
        <div class="flex h-screen items-center justify-center bg-zinc-700">
            <div class="mx-6 rounded-2xl bg-zinc-800 p-2">
                <div class="flex flex-col rounded-l-xl md:flex-row">
                    <img
                        src="./images/02/bg-email-card.jpg"
                        class="h-80 rounded-xl object-fill transition duration-200 hover:scale-105 hover:rounded-xl md:h-64 md:rounded-r-none"
                    />
                    <div class="p-6 md:p-12">
                        <h1 class="text-center font-serif text-xl font-medium text-white md:text-left">
                            Get diet and fitness tips in your inbox
                        </h1>
                        <p class="my-4 max-w-xs text-center text-xs leading-5 tracking-wide text-white md:text-left">
                            Eat better and exercise better. Sign up for the
                            Diet&Fitness newsletter.
                        </p>
                        <div class="flex flex-col items-center justify-start md:flex-row">
                            <input
                                class="bg-white/0 py-3 px-20 text-center text-xs text-white placeholder-gray-400 outline-none ring-1 ring-gray-600 md:text-left"
                                type="email"
                                placeholder="Enter your email address"
                            />
                            <button class="my-3 rounded-md bg-lime-500 py-3 px-[8rem] text-xs md:mx-2 md:px-4">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailSubscribeCard;
