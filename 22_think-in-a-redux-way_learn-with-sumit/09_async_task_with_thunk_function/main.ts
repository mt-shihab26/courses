import { applyMiddleware, createStore } from "redux";
import { fetchTodos } from "./api-call";
import {
    commonMiddleware,
    delayActionMiddleware,
    fetchAsyncMiddleware,
} from "./middlewares";

type TTodo = {
    title: string;
};

type TState = {
    todos: TTodo[];
};

const initialState: TState = {
    todos: [],
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "todos/add-todo":
            return {
                ...state,
                todos: [...state.todos, { title: action.payload }],
            };
        case "todos/load-todos":
            return {
                ...state,
                todos: [...state.todos, ...action.payload],
            };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    applyMiddleware(
        commonMiddleware,
        delayActionMiddleware,
        fetchAsyncMiddleware
    )
);

const render = () => {
    const state = store.getState();
    console.log(state);
};

store.subscribe(render);

// dispatch action
// store.dispatch({
//     type: "todos/add-todo",
//     payload: "Learning redux",
// });

store.dispatch(fetchTodos);
