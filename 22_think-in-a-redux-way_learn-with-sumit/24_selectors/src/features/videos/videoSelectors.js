import { createSelector } from "reselect";

export const selectAllVideos = state => state.videos.videos;

export const selectMemoizeWatchVideos = createSelector(
    selectAllVideos,
    videos => videos.filter(v => v.watched === true)
);

export const selectMemoizeUnWatchVideos = createSelector(
    selectAllVideos,
    videos => videos.filter(v => v.watched === false)
);

// export const selectMemoizeFilteredVideos = createSelector(
//     selectAllVideos,
//     (state, filter) => filter,
//     (videos, filter) => videos.filter(v => v.watched === filter)
// );

export const selectMemoizeFilteredVideos = () =>
    createSelector(
        selectAllVideos,
        (state, filter) => filter,
        (videos, filter) => videos.filter(v => v.watched === filter)
    );
