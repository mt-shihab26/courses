const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
    loading: false,
    videos: [],
    error: "",
};

const fetchRelatedVideos = createAsyncThunk("related/fetchRelatedVideos", async tags => {
    const suffix = tags.reduce((concat, current, index) => {
        concat += `tags_like=${current}`;
        if (index !== tags.length - 1) {
            concat += "&";
        }
        return concat;
    }, "");
    const url = `http://localhost:9000/videos?${suffix}`;
    // console.log(url);
    const response = await fetch(url);
    const relatedVideos = await response.json();
    // console.log(relatedVideos);
    const sortedVideos = relatedVideos.sort((x, y) => {
        if (x.views > y.views) return -1;
        if (x.views < y.views) return 1;
        return 0;
    });
    return sortedVideos;
});

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchRelatedVideos.pending, state => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.videos = action.payload;
        });
        builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.videos = [];
        });
    },
});

module.exports = relatedVideosSlice.reducer;
module.exports.fetchRelatedVideos = fetchRelatedVideos;
