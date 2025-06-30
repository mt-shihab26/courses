import { FC, useEffect, useState } from "react";

const Cleanup: FC = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log("Clock ticking!");
        setDate(new Date());
    };

    // similar to only componentDidMount
    useEffect(() => {
        console.log("starting timer");
        const interval = setInterval(tick, 1000);

        // similar to componentWillUnmount
        return () => {
            console.log("Component unmounted");
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div>Time: {date.toLocaleTimeString()}</div>
        </div>
    );
};

export default Cleanup;
