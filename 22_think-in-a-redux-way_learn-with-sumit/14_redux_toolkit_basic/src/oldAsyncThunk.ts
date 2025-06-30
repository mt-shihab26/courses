import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
    loading: false,
    posts: [],
    error: "",
};

const fetchPostsRequested = () => {
    return {
        type: "posts/requested",
    };
};

const fetchPostsSucceeded = (posts: any) => {
    return {
        type: "posts/succeeded",
        payload: posts,
    };
};

const fetchPostsFailed = (error: any) => {
    return {
        type: "posts/failed",
        payload: error.message,
    };
};

const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "posts/requested":
            return {
                ...state,
                loading: true,
                error: "",
            };

        case "posts/succeeded":
            return {
                ...state,
                loading: false,
                error: "",
                posts: action.payload,
            };

        case "posts/failed":
            return {
                ...state,
                loading: false,
                error: action.payload,
                posts: [],
            };

        default:
            break;
    }
};

const fetchPosts = () => {
    return async (dispatch: any) => {
        dispatch(fetchPostsRequested());

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=2"
            );
            const posts = await response.json();
            dispatch(fetchPostsSucceeded(posts));
        } catch (err: any) {
            dispatch(fetchPostsFailed(err));
        }
    };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchPosts());
