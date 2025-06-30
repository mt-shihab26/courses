import {
    CounterAction,
    CounterState,
    DECREMENT,
    INCREMENT,
} from "./counterTypes";

const initialState: CounterState = {
    value: 0,
};

const counterReducer = (state = initialState, action: CounterAction) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;
