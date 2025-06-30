import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../features/filter/filterSlice";
import { relatedVideosReducer } from "../features/relatedVideos/relatedVideosSlice";
import { tagsReducer } from "../features/tags/tagsSlice";
import { videoReducer } from "../features/video/videoSlice";
import { videosReducer } from "../features/videos/videosSlice";

const store = configureStore({
    reducer: {
        tags: tagsReducer,
        videos: videosReducer,
        filter: filterReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
