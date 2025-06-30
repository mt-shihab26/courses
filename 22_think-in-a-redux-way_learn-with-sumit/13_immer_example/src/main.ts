import { increment, decrement } from "./counter/actions";
import store from "./store";

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
