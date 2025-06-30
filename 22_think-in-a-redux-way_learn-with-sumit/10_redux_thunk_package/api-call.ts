import fetch from "node-fetch";

export const fetchTodos = async (dispatch: any, getState: any) => {
    console.log("I am fetching todos");
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    console.log("hello: ", response.status);
    const todos = await response.json();
    dispatch({
        type: "todos/load-todos",
        payload: todos,
    });
    console.log("Number of update Todos ", getState().todos.length);
    return;
};
