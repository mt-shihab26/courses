import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterType: "all",
    sortType: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSortType: (state, action) => {
            state.sortType = action.payload;
        },
        setFilterType: (state, action) => {
            state.filterType = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { setSortType, setFilterType } = filterSlice.actions;
