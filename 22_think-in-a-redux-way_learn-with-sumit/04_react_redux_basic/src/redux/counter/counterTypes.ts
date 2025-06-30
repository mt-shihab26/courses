export const INCREMENT = "counter/increment";
export const DECREMENT = "counter/decrement";

export type CounterState = {
    value: number;
};

export type CounterAction = {
    type: string;
};
