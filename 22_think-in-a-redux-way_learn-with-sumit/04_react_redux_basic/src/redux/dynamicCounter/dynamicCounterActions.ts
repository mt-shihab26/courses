import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "./dynamicCounterTypes";

export const dynamicIncrementAction = (value: number) => {
    return {
        type: DYNAMIC_INCREMENT,
        payload: value,
    };
};

export const dynamicDecrementAction = (value: number) => {
    return {
        type: DYNAMIC_DECREMENT,
        payload: value,
    };
};
