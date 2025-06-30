import {
    DYNAMIC_INCREMENT,
    DynamicCounterAction,
    DYNAMIC_DECREMENT,
    DynamicCounterState,
} from "./dynamicCounterTypes";

const initialState: DynamicCounterState = {
    value: 0,
};

const dynamicCounterReducer = (
    state = initialState,
    action: DynamicCounterAction
) => {
    switch (action.type) {
        case DYNAMIC_INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case DYNAMIC_DECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
            return state;
    }
};

export default dynamicCounterReducer;
