import type { AnyAction } from "redux";
import type { IAddTodo, ITodo, IUpdateTodo } from "./types";
import { ADD_TODO, DELETE_ALL_DONE, DELETE_TODO, UPDATE_ALL_DONE, UPDATE_TODO } from "./types";

const initialState: ITodo[] = [
    {
        id: 1,
        text: "Learn React from Learn with Sumit YouTube Channel",
        isDone: true,
        priority: "green",
    },
    {
        id: 2,
        text: "Learn Redux from Think in a Redux way course",
        isDone: false,
        priority: "red",
    },
];

const todoReducer = (state: ITodo[] = initialState, action: AnyAction) => {
    switch (action.type) {
        case ADD_TODO:
            const ut: IAddTodo = action.payload;
            const lastId = state[state.length - 1].id;
            return [...state, { ...ut, id: lastId ? lastId + 1 : 1 }];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case UPDATE_TODO:
            const payload: IUpdateTodo = action.payload;
            return state.map(todo => {
                if (todo.id !== payload.id) return todo;
                return { ...todo, ...payload };
            });
        case DELETE_ALL_DONE:
            return state.filter(todo => todo.isDone === false);
        case UPDATE_ALL_DONE:
            return state.map(todo => {
                if (todo.isDone === false) todo.isDone = true;
                return todo;
            });
        default:
            return state;
    }
};

export default todoReducer;
