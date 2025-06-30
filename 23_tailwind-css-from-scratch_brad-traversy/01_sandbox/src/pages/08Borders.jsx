const Borders = () => {
    return (
        <div>
            {/* Border width and colors  */}
            <div className="w-40 m-3 p-5 h-40 border" />
            <div className="w-40 m-3 p-5 h-40 border-2" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500" />
            <div className="w-40 m-3 p-5 h-40 border-8" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-x-4 border-red-500" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-y-4 border-red-500" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-t-4 border-red-500" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-b-4 border-red-500" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-l-4 border-red-500" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-r-4 border-red-500" />
            {/* Border Radius  */}
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded " />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded-md " />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded-lg " />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded-xl " />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded-2xl" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded-full" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded-b-2xl" />
            <div className="w-40 m-3 p-5 h-40 bg-gray-300 border-4 border-red-500 rounded-bl-2xl" />
            {/* Outline */}
            <div className="outline outline-4 outline-offset-2 outline-red-500">
                Click
            </div>
        </div>
    );
};

export default Borders;
