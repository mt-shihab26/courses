import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TagsState } from "../types";
import { getTags } from "./tagsAPI";

const initialState: TagsState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const tags = await getTags();
    return tags;
});

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTags.pending, state => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.tags = action.payload;
        });
        builder.addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message || "";
            state.tags = [];
        });
    },
});

export const tagsReducer = tagsSlice.reducer;
