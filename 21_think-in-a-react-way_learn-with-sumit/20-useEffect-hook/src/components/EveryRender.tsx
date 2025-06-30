import { FC, useEffect, useState } from "react";

const EveryRender: FC = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    // similar to componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log("updating document title");
        document.title = `${count} useEffect Hook`;
    });

    return (
        <div>
            <button onClick={handleClick}>Every Render Click</button>
        </div>
    );
};

export default EveryRender;
