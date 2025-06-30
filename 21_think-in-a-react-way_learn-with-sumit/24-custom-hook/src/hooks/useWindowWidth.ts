import { useState, useEffect } from "react";

const useWindowWidth = (screenSize: number) => {
    const [flag, setFlag] = useState<boolean>(false);

    const checkScreenSize = () => {
        setFlag(window.innerWidth < screenSize);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return flag;
};

export default useWindowWidth;
