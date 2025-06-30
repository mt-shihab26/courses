const EarlyAccessSection = () => {
    return (
        <section
            id="early-access"
            className="relative px-6 dark:bg-dark-blue-2 md:px-0"
        >
            <div className="relative -top-40 mx-auto max-w-4xl space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-dark-blue-1 md:px-16">
                <h5 className="text-2xl font-bold">Get early access today</h5>
                <p className="text-sm">
                    It only takes a minute to sign up and our free starter tier
                    is extremely generous. If you have any questions, our
                    support team would be happy to help you.
                </p>
                <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6 ">
                    <div className="w-full md:flex-1">
                        <input
                            type="text"
                            className="w-full rounded-full px-10 py-3 focus:outline-none"
                            placeholder="email@example.com"
                        />
                    </div>
                    <button className="w-full rounded-full bg-accent-cyan p-3 px-6 hover:scale-95 md:w-56">
                        Get Started For Free
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EarlyAccessSection;
