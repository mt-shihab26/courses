const LayoutAndPosition = () => {
    return (
        <div className="w-4/5 mx-auto flex flex-col space-y-2 mt-2">
            {/* Positioning */}
            <div className="relative h-12 bg-red-200 w-1/2">
                <p>Relative parent</p>
                <div className="absolute bottom-0 right-0 bg-red-500">
                    <p>Absolute child</p>
                </div>
            </div>
            {/* Top Left corner */}
            <div className="relative h-32 w-32 bg-yellow-200 rounded-3xl">
                <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-500"></div>
            </div>
            {/* Top Right corner  */}
            <div className="relative h-32 w-32 bg-yellow-200 mt-2 rounded-3xl">
                <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-500"></div>
            </div>
            {/* Bottom Left corner  */}
            <div className="relative h-32 w-32 bg-yellow-200 mt-2 rounded-3xl">
                <div className="absolute bottom-0 left-0 h-16 w-16 bg-yellow-500"></div>
            </div>
            {/* Bottom Right corner  */}
            <div className="relative h-32 w-32 bg-yellow-200 mt-2 rounded-3xl">
                <div className="absolute bottom-0 right-0 h-16 w-16 bg-yellow-500"></div>
            </div>
            {/* Span Left Edge  */}
            <div className="relative h-32 w-32 bg-yellow-200 mt-2 rounded-3xl">
                <div className="absolute inset-x-3 left-0 h-16 bg-yellow-500"></div>
            </div>
            {/* Span Right Edge  */}
            <div className="relative h-32 w-32 bg-yellow-200 mt-2 rounded-3xl">
                <div className="absolute inset-x-3 right-0 h-16 bg-yellow-500"></div>
            </div>
            {/* Span Bottom Edge  */}
            <div className="relative h-32 w-32 bg-yellow-200 mt-2 rounded-3xl">
                <div className="absolute inset-y-3 bottom-0 w-16 bg-yellow-500"></div>
            </div>
            {/* Span Top Edge  */}
            <div className="relative h-32 w-32 bg-yellow-200 mt-2 rounded-3xl">
                <div className="absolute inset-y-3 top-0 w-16 bg-yellow-500"></div>
            </div>
            {/* Display Classes */}
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                aliquid, sequi est nobis officiis ullam ratione!{" "}
                <span className="inline text-red-400">This is inline</span> Et
                sit, voluptates quaerat ipsum quo{" "}
                <span className="inline-block text-red-400">
                    This is inline block
                </span>{" "}
                provident, voluptas ex aliquam unde, suscipit illo{" "}
                <span className="block text-red-400">This is block</span>{" "}
                cupiditate ullam perferendis sequi? Accusamus, laudantium
                suscipit? Vitae exercitationem doloremque sit eum{" "}
                <span className="hidden text-red-400">This is hidden</span>{" "}
                repellendus mollitia deleniti praesentium libero saepe ratione,
                temporibus natus odio! Nihil, cupiditate ut quaerat atque
                voluptatem veritatis similique in.
            </div>
            {/* Z-Index  */}
            <div className="relative h-36 text-white">
                <div className="absolute left-10 w-24 h-24 bg-blue-500 z-40">
                    1
                </div>
                <div className="absolute left-20 w-24 h-24 bg-blue-600">2</div>
                <div className="absolute left-40 w-24 h-24 bg-blue-700 z-10">
                    3
                </div>
                <div className="absolute left-60 w-24 h-24 bg-blue-800 z-20">
                    4
                </div>
                <div className="absolute left-80 w-24 h-24 bg-blue-900 z-30">
                    5
                </div>
            </div>
            {/* Floats */}
            <div className="w-1/2">
                <img
                    className="h-48 w-48 float-left m-4 mt-1"
                    src="/img/img1.jpg"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, perferendis enim, quasi ipsa eum ut nesciunt atque
                    necessitatibus reprehenderit cum blanditiis id officia quae
                    repudiandae quam commodi aliquid accusamus natus.
                </p>
            </div>
        </div>
    );
};

export default LayoutAndPosition;
