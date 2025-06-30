const ProductiveSection = () => {
    return (
        <section className="bg-white dark:bg-dark-blue-0">
            <div className="mx-auto flex flex-col items-center px-6 pt-24 pb-32 md:flex-row md:space-x-16">
                <div className="md:w-1/2">
                    <img
                        src="/images/illustration-stay-productive.png"
                        alt=""
                        className="mb-10"
                    />
                </div>
                <div className="flex flex-col items-start md:w-1/2">
                    <div className="flex flex-col space-y-5">
                        <h4 className="max-w-md text-xl font-bold md:w-3/4 md:text-4xl">
                            Stay productive, wherever you are
                        </h4>
                        <p className="text-md md:text-lg">
                            Never let location be an issue when accessing your
                            files. Fylo has you covered for all of your file
                            storage needs.
                        </p>
                        <p className="text-md md:text-lg">
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                    </div>
                    <div className="mt-4 block">
                        <a
                            href=""
                            className="border-b border-accent-cyan text-accent-cyan"
                        >
                            See how Fylo works
                            <img
                                src="/images/icon-arrow.svg"
                                alt=""
                                className="inline pb-2"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductiveSection;
