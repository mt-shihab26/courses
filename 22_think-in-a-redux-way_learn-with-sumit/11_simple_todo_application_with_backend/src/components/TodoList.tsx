import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TState } from "../redux/rootReducer";
import type { TTodo } from "../redux/todos/todoInitialState";
import { fetchTodosThunk } from "../redux/todos/todoThunks";
import Todo from "./Todo";

const TodoList = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state: TState) => state.todos);
    const filters = useSelector((state: TState) => state.filters);

    useEffect(() => {
        dispatch(fetchTodosThunk());
    }, []);

    const filterByStatus = (todo: TTodo) => {
        const { status } = filters;
        switch (status) {
            case "complete":
                return todo.completed;
            case "incomplete":
                return !todo.completed;
            default:
                return true;
        }
    };

    const filterByColors = (todo: TTodo) => {
        const { colors } = filters;
        if (colors.length === 0) {
            return true;
        }
        return colors.includes(todo.color);
    };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(filterByStatus)
                .filter(filterByColors)
                .map((todo: any) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
        </div>
    );
};

export default TodoList;
