import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    dynamicDecrementAction,
    dynamicIncrementAction,
} from "../redux/dynamicCounter/dynamicCounterActions";
import { State } from "../redux/rootReducer";

const DynamicCounter: FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: State) => state.dynamicCounter.value);

    const handleIncrement = () => dispatch(dynamicIncrementAction(5));
    const handleDecrement = () => dispatch(dynamicDecrementAction(4));

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

export default DynamicCounter;
