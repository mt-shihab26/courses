const BackgroundsAndShadows = () => {
    return (
        <div>
            {/* Backgrounds Images */}
            <div
                className="h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("../assets/img/img1.jpg")' }}
            />
            {/* Gradients */}
            <div className="bg-gradient-to-l h-24 from-cyan-500 to-blue-500" />
            {/* Shadow  */}
            <div className="w-96 mt-6 ml-4 p-4 shadow">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sequi in adipisci dolore architecto libero quasi cum voluptatem
                dignissimos repellat.
            </div>
            <div className="w-96 mt-6 ml-4 p-4 shadow-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sequi in adipisci dolore architecto libero quasi cum voluptatem
                dignissimos repellat.
            </div>
            <div className="w-96 mt-6 ml-4 p-4 shadow-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sequi in adipisci dolore architecto libero quasi cum voluptatem
                dignissimos repellat.
            </div>
            <div className="w-96 mt-6 ml-4 p-4 shadow-xl shadow-red-500/75">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sequi in adipisci dolore architecto libero quasi cum voluptatem
                dignissimos repellat.
            </div>
            <div className="w-96 mt-6 ml-4 p-4 shadow-2xl shadow-blue-500/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sequi in adipisci dolore architecto libero quasi cum voluptatem
                dignissimos repellat.
            </div>
            <div className="w-96 mt-6 ml-4 p-4 shadow-inner">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sequi in adipisci dolore architecto libero quasi cum voluptatem
                dignissimos repellat.
            </div>
            <div className="w-96 mt-6 ml-4 p-4 shadow-none">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sequi in adipisci dolore architecto libero quasi cum voluptatem
                dignissimos repellat.
            </div>
            {/* Mix Blend */}
            <div className="flex justify-center -space-x-20">
                <div className="mix-blend-multiply bg-blue-400 shadow-2xl shadow-red-700/40 w-48 h-48 rounded-full" />
                <div className="mix-blend-multiply bg-pink-400 shadow-2xl shadow-red-700/40 w-48 h-48 rounded-full" />
            </div>
        </div>
    );
};

export default BackgroundsAndShadows;
