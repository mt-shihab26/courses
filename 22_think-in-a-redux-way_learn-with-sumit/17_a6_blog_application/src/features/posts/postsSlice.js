import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPI";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async ({ sortType, filterType }) => {
        const posts = await getPosts(sortType, filterType);
        return posts;
    }
);

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.posts = [];
            });
    },
});

export const postsReducer = postsSlice.reducer;
