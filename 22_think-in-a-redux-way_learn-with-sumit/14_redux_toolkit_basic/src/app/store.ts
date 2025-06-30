import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../slices/counterSlice";
import { dynamicCounterReducer } from "../slices/dynamicCounterSlice";
import { createLogger } from "redux-logger";
import { postsReducer } from "../slices/postsSlice";

const logger = createLogger();

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        posts: postsReducer,
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(logger),
});

export default store;

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
