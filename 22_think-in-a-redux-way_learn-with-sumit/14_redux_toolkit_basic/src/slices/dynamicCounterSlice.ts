import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { counterActions } from "./counterSlice";

type DCounterState = {
    counter: number;
};

const initialState: DCounterState = {
    counter: 0,
};

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        increment: (state: DCounterState, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrement: (state: DCounterState, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
    },
    // extraReducers: {
    //     ["counter/increment"]: (state: CounterState, action: any) => {
    //         console.log("here", action);
    //         state.counter++;
    //     },
    // },
    extraReducers: builder => {
        builder.addCase(counterActions.increment, (state: DCounterState) => {
            state.counter++;
        });
    },
});

export const dynamicCounterReducer = dynamicCounterSlice.reducer;

export const { increment, decrement } = dynamicCounterSlice.actions;
