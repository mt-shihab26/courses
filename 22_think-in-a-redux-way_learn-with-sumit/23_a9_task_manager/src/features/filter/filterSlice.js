import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        selectedProjects: [],
        searchString: "",
    },
    reducers: {
        setProjectToSelected(state, action) {
            state.selectedProjects = action.payload;
        },
        toggleProjectSelection(state, action) {
            const id = action.payload;
            if (state.selectedProjects.find(p => p === id)) {
                state.selectedProjects = state.selectedProjects.filter(
                    p => p !== id
                );
            } else {
                state.selectedProjects.push(id);
            }
        },
        setSearchString(state, action) {
            state.searchString = action.payload;
        },
    },
});

export const { setProjectToSelected, toggleProjectSelection, setSearchString } =
    filterSlice.actions;
export default filterSlice;
