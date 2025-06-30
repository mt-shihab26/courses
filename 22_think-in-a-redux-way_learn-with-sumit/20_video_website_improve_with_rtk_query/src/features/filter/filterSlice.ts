import { createSlice } from "@reduxjs/toolkit";

export type FilterState = {
    searchString: string;
    selectedTags: string[];
};

const initialState: FilterState = {
    searchString: "",
    selectedTags: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSelectedTag: (state, action) => {
            state.selectedTags.push(action.payload);
        },
        removeSelectedTag: (state, action) => {
            const index = state.selectedTags.indexOf(action.payload);
            if (index !== -1) {
                state.selectedTags.splice(index, 1);
            }
        },
        setSearchString: (state, action) => {
            state.searchString = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { setSearchString, setSelectedTag, removeSelectedTag } = filterSlice.actions;
