import { added, deleteTodo, loaded, updateTodo } from "./todoActions";
import type { TTodo } from "./todoInitialState";

const API_BASE_URL = "http://localhost:9000";

export const fetchTodosThunk = (): any => async (dispatch: any) => {
    const response = await fetch(`${API_BASE_URL}/todos`);
    const todos: TTodo[] = await response.json();
    dispatch(loaded(todos));
};

export const addTodo =
    (todoText: string): any =>
    async (dispatch: any) => {
        const response = await fetch(`${API_BASE_URL}/todos`, {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
        const todo: TTodo = await response.json();
        dispatch(added(todo));
    };

export const updateTodoThunk =
    (todo: TTodo): any =>
    async (dispatch: any) => {
        const response = await fetch(`${API_BASE_URL}/todos/${todo.id}`, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
        const todo2: TTodo = await response.json();
        dispatch(updateTodo(todo2));
    };

export const deleteTodoThunk =
    (todoId: number): any =>
    async (dispatch: any) => {
        await fetch(`${API_BASE_URL}/todos/${todoId}`, { method: "DELETE" });
        dispatch(deleteTodo(todoId));
    };
