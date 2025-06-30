import { configureStore } from "@reduxjs/toolkit";
import { transactionsReducer } from "../features/transactions/transactionsSlice";

const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
