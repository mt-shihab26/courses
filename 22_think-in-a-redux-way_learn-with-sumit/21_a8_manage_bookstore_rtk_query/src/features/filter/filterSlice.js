import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchString: "",
    filterBy: "all",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterBy: (state, action) => {
            state.filterBy = action.payload;
        },
        setSearchString: (state, action) => {
            state.searchString = action.payload;
        },
    },
});

export const { setSearchString, setFilterBy } = filterSlice.actions;
