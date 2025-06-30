import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import { CounterState } from "./counter/counterTypes";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import { DynamicCounterState } from "./dynamicCounter/dynamicCounterTypes";

export type State = {
    dynamicCounter: DynamicCounterState;
    counter: CounterState;
};

const rootReducer = combineReducers({
    dynamicCounter: dynamicCounterReducer,
    counter: counterReducer,
});

export default rootReducer;
