import { Dispatch, FC } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import {
    decrementAction,
    incrementAction,
} from "../redux/counter/counterActions";
import {
    dynamicDecrementAction,
    dynamicIncrementAction,
} from "../redux/dynamicCounter/dynamicCounterActions";
import { State } from "../redux/rootReducer";

interface OwnProps {
    dynamic?: boolean;
}

interface Props extends OwnProps {
    count: number;
    increment: (value: number) => void;
    decrement: (value: number) => void;
}

const VariableCounter: FC<Props> = ({ count, increment, decrement }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
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
    return {
        count: ownProps.dynamic
            ? state.dynamicCounter.value
            : state.counter.value,
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch<Action<unknown>>,
    ownProps: OwnProps
) => {
    return {
        increment: (value: number) =>
            dispatch(
                ownProps.dynamic
                    ? dynamicIncrementAction(value)
                    : incrementAction()
            ),
        decrement: (value: number) =>
            dispatch(
                ownProps.dynamic
                    ? dynamicDecrementAction(value)
                    : decrementAction()
            ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
