import { useSelector } from "react-redux";
import { TState } from "../redux/rootReducer";
import { TTodo } from "../redux/todos/todoInitialState";
import Todo from "./Todo";

const TodoList = () => {
    const todos = useSelector((state: TState) => state.todos);
    const filters = useSelector((state: TState) => state.filters);

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
