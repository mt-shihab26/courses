import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost, updatePost } from "./postAPI";

export const fetchPost = createAsyncThunk("post/fetchPost", async ({ postId }) => {
    const post = await getPost(postId);
    return post;
});

export const updateLike = createAsyncThunk(
    "post/updateLike",
    async ({ postId, likes }) => {
        await updatePost(postId, { likes: likes + 1 });
    }
);

export const updateSaved = createAsyncThunk(
    "post/updateSaved",
    async ({ postId, isSaved }) => {
        await updatePost(postId, { isSaved: !isSaved });
    }
);

const initialState = {
    post: {},
    isLoading: false,
    isError: false,
    error: "",
};

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchPost.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.post = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.post = {};
            });
        builder.addCase(updateLike.fulfilled, state => {
            state.post.likes++;
        });
        builder.addCase(updateSaved.fulfilled, state => {
            state.post.isSaved = !state.post.isSaved;
        });
    },
});

export const postReducer = postSlice.reducer;
