import { useState } from "react";
import useTitle from "../hooks/useTitle";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // useEffect(() => {
    //     // componentDidMount
    //     // componentDidUpdate
    //     document.title = `${name} has ${count} times.`;

    //     return () => {
    //         // componentWillUnmount
    //         console.log("Clean Up");
    //     };
    // }, [count, name]);

    useTitle(`${name} has ${count} times.`);

    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleSetName = e => {
        setName(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleSetName} />
            <h2>
                {name} has {count} times.
            </h2>
            <button onClick={handleIncrease}>+1</button>
        </div>
    );
};

export default Counter;
