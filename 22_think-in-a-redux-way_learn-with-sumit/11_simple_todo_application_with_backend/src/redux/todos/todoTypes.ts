import type { TColor } from "../filters/filterInitialState";
import type { TTodo } from "./todoInitialState";

export const LOADED = "todo/loaded";
export const ADDED = "todo/added";
export const UPDATE_TODO = "todo/update";
export const DELETED_TODO = "todo/deleted";
export const ALL_COMPLETED = "todo/all-completed";
export const CLEAR_COMPLETED = "todo/clear-completed";

export type TAddedAction = {
    type: typeof ADDED;
    payload: TTodo;
};

export type TUpdateTodoAction = {
    type: typeof UPDATE_TODO;
    payload: TTodo;
};

export type TColorSelectedPayload = {
    todoId: number;
    color: TColor;
};

export type TDeletedAction = {
    type: typeof DELETED_TODO;
    payload: number;
};

export type TAllCompletedAction = {
    type: typeof ALL_COMPLETED;
};

export type TClearCompletedAction = {
    type: typeof CLEAR_COMPLETED;
};

export type ILoadedAction = {
    type: typeof LOADED;
    payload: TTodo[];
};

export type TTodoActions =
    | TAddedAction
    | TUpdateTodoAction
    | TDeletedAction
    | TAllCompletedAction
    | TClearCompletedAction
    | ILoadedAction;
