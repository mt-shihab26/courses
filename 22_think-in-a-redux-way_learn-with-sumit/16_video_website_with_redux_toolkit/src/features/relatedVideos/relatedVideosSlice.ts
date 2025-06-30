import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RelatedVideosState } from "../types";
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState: RelatedVideosState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
    "relatedVideos/fetchRelatedVideos",
    async ({ tags, id }: { tags: string[]; id: number }) => {
        const videos = await getRelatedVideos(tags, id);
        return videos;
    }
);

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRelatedVideos.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.relatedVideos = [];
                state.error = action.error.message || "";
            });
    },
});

export const relatedVideosReducer = relatedVideosSlice.reducer;
