const Sizing = () => {
    return (
        <div>
            {/* Width  */}
            <div className="bg-black text-white w-12">Hello</div>
            <div className="bg-black text-white w-58">Hello</div>
            <div className="bg-black text-white w-96">Hello</div>
            <div className="bg-green-700 text-white w-1/4">Hello</div>
            <div className="bg-green-700 text-white w-1/3">Hello</div>
            <div className="bg-green-700 text-white w-1/2">Hello</div>
            {/* <div class="bg-blue-500 text-white w-screen">Hello</div> */}
            <div className="bg-blue-300 text-white w-full">Hello</div>
            <div className="bg-blue-700 text-white w-[300px]">Hello</div>
            {/* Max Wight */}
            <div className="bg-gray-300 max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis rem eum accusantium repellat ea eius nihil
                repudiandae, nam cumque odio nisi totam laborum excepturi
                possimus ipsa, sequi dolores magnam. Voluptatum esse debitis
                odit illum enim consectetur totam porro maxime, eligendi
                asperiores commodi assumenda dignissimos eum ea exercitationem
                dolor nam. Culpa?
            </div>
            {/* Hight */}
            <div className="flex items-end mt-5">
                <div className="bg-orange-500 w-20 h-24">Hello</div>
                <div className="bg-orange-500 w-20 h-32">Hello</div>
                <div className="bg-orange-500 w-20 h-40">Hello</div>
                <div className="bg-orange-500 w-20 h-48">Hello</div>
                <div className="bg-orange-500 w-20 h-64">Hello</div>
                <div className="bg-orange-500 w-20 h-96">Hello</div>
            </div>
            <div className="bg-orange-500 w-20 h-screen">Hello</div>
        </div>
    );
};

export default Sizing;
