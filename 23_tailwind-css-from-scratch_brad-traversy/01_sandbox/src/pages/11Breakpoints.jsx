const Breakpoints = () => {
    const showBrowserWidth = () => {
        const width = window.innerWidth;
        document.querySelector("h1").innerText = `Width: ${width}px`;
    };

    window.onload = showBrowserWidth;
    window.onresize = showBrowserWidth;

    return (
        <div className="bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-red-800">
            <h1 className="text-white text-xl md:text-3xl lg:text-5xl" />
        </div>
    );
};

export default Breakpoints;
