import React from "react";
import Counter from "./Counter.jsx";

export default ({ counters, onReset, onDelete, onIncrement, onDecrement }) => {
    console.log("Counters - render");
    return (
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
                Reset
            </button>

            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    counter={counter}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                >
                    <h2>Counter #{counter.id}</h2>
                </Counter>
            ))}
        </div>
    );
};
