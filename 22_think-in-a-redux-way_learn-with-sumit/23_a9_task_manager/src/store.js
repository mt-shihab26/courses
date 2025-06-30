import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import filterSlice from "./features/filter/filterSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddlewares =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
