import type { TTodo } from "./todoInitialState";
import type {
    ILoadedAction,
    TAddedAction,
    TAllCompletedAction,
    TClearCompletedAction,
    TDeletedAction,
    TUpdateTodoAction,
} from "./todoTypes";
import {
    ADDED,
    ALL_COMPLETED,
    CLEAR_COMPLETED,
    DELETED_TODO,
    LOADED,
    UPDATE_TODO,
} from "./todoTypes";

export const added = (todo: TTodo): TAddedAction => {
    return {
        type: ADDED,
        payload: todo,
    };
};

export const updateTodo = (todo: TTodo): TUpdateTodoAction => {
    return {
        type: UPDATE_TODO,
        payload: todo,
    };
};

export const deleteTodo = (todoId: number): TDeletedAction => {
    return {
        type: DELETED_TODO,
        payload: todoId,
    };
};

export const allCompleted = (): TAllCompletedAction => {
    return {
        type: ALL_COMPLETED,
    };
};

export const clearCompleted = (): TClearCompletedAction => {
    return {
        type: CLEAR_COMPLETED,
    };
};

export const loaded = (todos: TTodo[]): ILoadedAction => ({
    type: LOADED,
    payload: todos,
});
