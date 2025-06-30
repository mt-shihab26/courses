import { FC, useEffect, useState } from "react";

const OnlyOnce: FC = () => {
    const [count, setCount] = useState(5);
    const [date, setDate] = useState(new Date());

    const handleClick = () => {
        setCount(count + 1);
    };

    const tick = () => {
        setDate(new Date());
    };

    // similar to componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log("updating document title");
        document.title = `${count} useEffect Hook`;
    }, [count]);

    // similar to only componentDidMount
    useEffect(() => {
        console.log("starting timer");
        setInterval(tick, 1000);
    }, []);

    return (
        <div>
            <div>Time: {date.toLocaleTimeString()}</div>
            <div>
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    );
};

export default OnlyOnce;
