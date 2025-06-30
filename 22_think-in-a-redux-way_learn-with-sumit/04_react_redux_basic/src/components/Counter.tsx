import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementAction,
    incrementAction,
} from "../redux/counter/counterActions";
import { State } from "../redux/rootReducer";

const Counter: FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: State) => state.counter.value);

    const handleIncrement = () => dispatch(incrementAction());
    const handleDecrement = () => dispatch(decrementAction());

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
