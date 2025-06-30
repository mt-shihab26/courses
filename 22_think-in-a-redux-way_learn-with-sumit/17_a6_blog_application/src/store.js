import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./features/filter/filterSlice";
import { postReducer } from "./features/post/postSlice";
import { postsReducer } from "./features/posts/postsSlice";
import { relatedPostsReducer } from "./features/relatedPosts/relatedPostsSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        post: postReducer,
        relatedPosts: relatedPostsReducer,
        filter: filterReducer,
    },
});

export default store;
