const TransformAndTransition = () => {
    return (
        <div>
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700">
                Click me
            </button>
            {/* Transition */}
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-1000 hover:opacity-20">
                Click me
            </button>
            {/* Transform  */}
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:rotate-12 transition-transform duration-1000">
                Click me
            </button>
            <img
                src="/img/img1.jpg"
                className="w-48 hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-2000"
            />
        </div>
    );
};

export default TransformAndTransition;
