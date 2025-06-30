import { FC, useEffect, useRef, useState } from "react";

const Time: FC = () => {
    const [date, setDate] = useState(new Date());
    const intervalRef = useRef<number>();

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        intervalRef.current = setInterval(tick, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const handleStopTime = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button onClick={handleStopTime}>Stop Time</button>
        </div>
    );
};

export default Time;
