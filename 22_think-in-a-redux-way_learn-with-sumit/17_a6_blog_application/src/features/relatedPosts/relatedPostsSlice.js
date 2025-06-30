import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPosts } from "./relatedPostsAPI";

const initialState = {
    relatedPosts: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchRelatedPosts = createAsyncThunk(
    "relatedPosts/fetchRelatedPosts",
    async ({ tags, id }) => {
        const relatedPosts = await getRelatedPosts(tags, id);
        return relatedPosts;
    }
);

const relatedPostsSlice = createSlice({
    name: "relatedPosts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRelatedPosts.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.relatedPosts = action.payload;
            })
            .addCase(fetchRelatedPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.relatedPosts = [];
                state.error = action.error.message;
            });
    },
});

export const relatedPostsReducer = relatedPostsSlice.reducer;
