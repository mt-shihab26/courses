import { useState } from "react";

const DarkMode = () => {
    const html = document.documentElement;
    const [toggle, setToggle] = useState(false);
    console.log(toggle);
    const toggleHandler = e => {
        setToggle(!toggle);
        if (e.target.checked) html.classList.add("dark");
        else html.classList.remove("dark");
    };

    return (
        <div className="bg-purple-400 dark:bg-purple-900">
            <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl">
                <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
                    Lorem ipsum dolor sit.
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                    debitis nemo iste tenetur ipsa atque saepe quae, nisi, quas
                    repudiandae in voluptatem modi veritatis vero.
                </p>
            </div>
            <div className="relative inline-block w-10 mr-2 ml-6 mt-6 align-middle select-none transition duration-200 ease-in">
                <input
                    onChange={toggleHandler}
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default DarkMode;
