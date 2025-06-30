import { INCREMENT, DECREMENT } from "./counterTypes";

export const incrementAction = () => {
    return {
        type: INCREMENT,
    };
};

export const decrementAction = () => {
    return {
        type: DECREMENT,
    };
};
