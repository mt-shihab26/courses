import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideosState } from "../types";
import { getVideos } from "./videosAPI";

const initialState: VideosState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    async ({
        searchString,
        selectedTags,
    }: {
        searchString: string;
        selectedTags: string[];
    }) => {
        const videos = await getVideos(selectedTags, searchString);
        return videos;
    }
);

const videosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchVideos.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error.message || "";
            });
    },
});

export const videosReducer = videosSlice.reducer;
