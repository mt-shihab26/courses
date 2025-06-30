import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
    counter: number;
};

const initialState: CounterState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state: CounterState, action: any) => {
            // state.counter++;
            return { ...state, counter: state.counter + 1 };
        },
        decrement: (state: CounterState, action: any) => {
            state.counter--;
            // return { ...state, counter: state.counter - 1 };
        },
    },
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;

export const { increment, decrement } = counterSlice.actions;
