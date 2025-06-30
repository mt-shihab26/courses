import { ChangeEvent, FC, useEffect, useState } from "react";

const RenderConditionally: FC = () => {
    const [count, setCount] = useState(5);
    const [text, setText] = useState("");

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // similar to componentDidMount & componentDidUpdate when count change
    useEffect(() => {
        console.log("updating document title");
        document.title = `${count} useEffect Hook`;
    }, [count]);

    return (
        <div>
            <div>
                <input type="text" value={text} onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    );
};

export default RenderConditionally;
