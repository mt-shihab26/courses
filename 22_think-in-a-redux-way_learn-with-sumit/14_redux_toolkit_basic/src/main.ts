// import { decrement, increment } from "./slices/dynamicCounterSlice";
// import { decrement, increment } from "./slices/counterSlice";
import store from "./app/store";
import { fetchPosts } from "./slices/postsSlice";

store.subscribe(() => {
    // console.log(store.getState());
});

// store.dispatch(increment(undefined));
// store.dispatch(increment(undefined));
// store.dispatch(decrement(undefined));

store.dispatch(fetchPosts());
