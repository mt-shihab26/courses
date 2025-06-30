import { Dispatch, FC } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import {
    dynamicDecrementAction,
    dynamicIncrementAction,
} from "../redux/dynamicCounter/dynamicCounterActions";
import { State } from "../redux/rootReducer";

interface OwnProps {
    id: string;
}

interface Props extends OwnProps {
    count: number;
    increment: (value: number) => void;
    decrement: (value: number) => void;
}

const Counter: FC<Props> = ({ count, increment, decrement, id }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div>{id}</div>
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => increment(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrement(5)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
    console.log(ownProps);
    return {
        count: state.dynamicCounter.value,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<unknown>>) => {
    return {
        increment: (value: number) => dispatch(dynamicIncrementAction(value)),
        decrement: (value: number) => dispatch(dynamicDecrementAction(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
