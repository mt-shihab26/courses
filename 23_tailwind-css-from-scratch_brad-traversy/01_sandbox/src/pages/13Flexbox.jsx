const Flexbox = () => {
    return (
        <div>
            {/* Flex and aliment */}
            <div className="flex flex-col md:flex-row">
                <div className="p-10 border border-blue-300 bg-blue-100">
                    01
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    02
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    03
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center h-72 w-full bg-gray-200">
                <div className="p-10 border border-blue-300 bg-blue-100">
                    01
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    02
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    03
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="order-3 p-10 border border-blue-300 bg-blue-100">
                    01
                </div>
                <div className="order-2 p-10 border border-blue-300 bg-blue-100">
                    02
                </div>
                <div className="order-4 p-10 border border-blue-300 bg-blue-100">
                    03
                </div>
                <div className="order-1 p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
            </div>
            {/* Grow and Shrink */}
            <div className="flex w-full">
                <div className="w-64 flex-initial p-10 border border-blue-300 bg-blue-100">
                    01
                </div>
                <div className="w-64 flex-none p-10 border border-blue-300 bg-blue-100">
                    02
                </div>
                <div className="w-64 flex-auto p-10 border border-blue-300 bg-blue-100">
                    03
                </div>
                <div className="w-64 flex-1 p-10 border border-blue-300 bg-blue-100">
                    04
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    05
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    06
                </div>
                <div className="p-10 border border-blue-300 bg-blue-100">
                    07
                </div>
            </div>
            <div className="flex text-center">
                <div className="flex-1 bg-blue-100">Hello</div>
                <div className="flex-1 bg-blue-100">Hello</div>
                <div className="flex-1 bg-blue-100">Hello</div>
            </div>
        </div>
    );
};

export default Flexbox;
