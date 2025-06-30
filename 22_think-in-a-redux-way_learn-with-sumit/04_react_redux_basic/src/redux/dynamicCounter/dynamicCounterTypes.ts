export const DYNAMIC_INCREMENT = "dynamicCounter/increment";
export const DYNAMIC_DECREMENT = "dynamicCounter/decrement";

export type DynamicCounterState = {
    value: number;
};

export type DynamicCounterAction = {
    type: string;
    payload: number;
};
