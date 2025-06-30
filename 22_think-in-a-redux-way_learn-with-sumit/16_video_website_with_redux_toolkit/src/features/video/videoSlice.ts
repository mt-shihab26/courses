import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideoState } from "../types";
import { getVideo } from "./videoAPI";

const initialState: VideoState = {
    isLoading: false,
    isError: false,
    error: "",
    video: null,
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id: number) => {
    const video = await getVideo(id);
    return video;
});

const videoSlice = createSlice({
    name: "relatedVideos",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchVideo.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message || "";
                state.video = null;
            });
    },
});

export const videoReducer = videoSlice.reducer;
