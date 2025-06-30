import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");
    const posts = await response.json();
    return posts;
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        loading: false,
        posts: [],
        error: "",
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.posts = [];
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "";
            state.posts = [];
        });
    },
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
