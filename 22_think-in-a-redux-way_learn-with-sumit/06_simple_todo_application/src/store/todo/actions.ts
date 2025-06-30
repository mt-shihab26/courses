import type { IAddTodo, IUpdateTodo } from "./types";
import { ADD_TODO, DELETE_ALL_DONE, DELETE_TODO, UPDATE_ALL_DONE, UPDATE_TODO } from "./types";

export const addTodoAction = (payload: IAddTodo) => {
    return { type: ADD_TODO, payload: payload };
};

export const deleteTodoAction = (id: number) => {
    return { type: DELETE_TODO, payload: id };
};

export const updateTodoAction = (payload: IUpdateTodo) => {
    return { type: UPDATE_TODO, payload: payload };
};

export const deleteAllTodoDoneAction = () => {
    return { type: DELETE_ALL_DONE };
};

export const updateAllTodoDoneAction = () => {
    return { type: UPDATE_ALL_DONE };
};
