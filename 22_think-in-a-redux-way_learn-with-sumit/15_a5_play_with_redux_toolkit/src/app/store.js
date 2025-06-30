const configureStore = require("@reduxjs/toolkit").configureStore;
const videoReducer = require("../features/video/videoSlice");
const relatedVideosReducer = require("../features/relatedVideo/relatedVideosSlice");
const { createLogger } = require("redux-logger");

const store = configureStore({
    reducer: {
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(createLogger()),
});

module.exports = store;
