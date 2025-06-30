import { useState } from "react";

const CustomizationAndConfig = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const showBrowserWidth = () => {
        const width = window.innerWidth;
        setWidth(width);
    };
    window.onload = showBrowserWidth;
    window.onresize = showBrowserWidth;

    return (
        <div className="bg-black sm2:bg-green-800 md2:bg-blue-800 lg2:bg-yellow-800 xl2:bg-purple-800 2xl:bg-red-800">
            <div className="border border-secondary p-6 mb-128 max-w-sm mx-auto rounded-4xl">
                <h1 className="text-primary text-xl">Width: {width}px</h1>
            </div>
        </div>
    );
};

export default CustomizationAndConfig;
