export type Priority = "green" | "yellow" | "red";

export interface ITodo {
    id: number;
    text: string;
    isDone: boolean;
    priority: Priority;
}

export interface IAddTodo {
    text: string;
    isDone: boolean;
    priority: Priority;
}

export interface IUpdateTodo {
    id: number;
    text?: string;
    isDone?: boolean;
    priority?: Priority;
}

export const ADD_TODO = "todoList/add";
export const DELETE_TODO = "todoList/delete";
export const UPDATE_TODO = "todoList/update";
export const DELETE_ALL_DONE = "todoList/delete-all-done";
export const UPDATE_ALL_DONE = "todoList/update-all-done";
