require("util").inspect.defaultOptions.depth = null;

const store = require("./app/store");
const { fetchRelatedVideos } = require("./features/relatedVideo/relatedVideosSlice");
const { fetchVideo } = require("./features/video/videoSlice.js");

store.subscribe(() => {
    // console.log(JSON.stringify(store.getState()));
});

// dispatch actions
const main = async () => {
    const action = await store.dispatch(fetchVideo());
    if (action.type === "video/fetchVideo/fulfilled") {
        const { video } = store.getState().video;
        await store.dispatch(fetchRelatedVideos(video.tags));
        // console.log(store.getState().relatedVideos);
    }
};

main();
