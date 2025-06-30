import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortingOrder: "none",
    searchString: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSortingOrder: (state, action) => {
            state.sortingOrder = action.payload;
        },
        setSearchString: (state, action) => {
            state.searchString = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { setSortingOrder, setSearchString } = filterSlice.actions;
