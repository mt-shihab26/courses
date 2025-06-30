import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/filterActions";
import { TColor, TStatus } from "../redux/filters/filterInitialState";
import { TState } from "../redux/rootReducer";

const remainingMessage = (todosRemaining: number) => {
    switch (todosRemaining) {
        case 0:
            return "No tasks";
        case 1:
            return "1 task";
        default:
            return `${todosRemaining} tasks`;
    }
};

const Footer = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state: TState) => state.todos);
    const filters = useSelector((state: TState) => state.filters);

    const todosRemaining = todos.filter(todo => !todo.completed).length;

    const { status, colors } = filters;

    const handleStatusChange = (status: TStatus) => {
        dispatch(statusChanged(status));
    };

    const handleColorChange = (color: TColor) => {
        dispatch(colorChanged(color));
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{remainingMessage(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    onClick={() => handleStatusChange("all")}
                    className={`cursor-pointer ${status === "all" ? " font-bold" : ""}`}
                >
                    All
                </li>
                <li>|</li>
                <li
                    onClick={() => handleStatusChange("incomplete")}
                    className={`cursor-pointer ${status === "incomplete" ? " font-bold" : ""}`}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li
                    onClick={() => handleStatusChange("complete")}
                    className={`cursor-pointer ${status === "complete" ? " font-bold" : ""}`}
                >
                    Complete
                </li>
                <li />
                <li />
                <li
                    onClick={() => handleColorChange("green")}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                        colors.includes("green") ? "bg-green-500" : ""
                    }`}
                />
                <li
                    onClick={() => handleColorChange("red")}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                        colors.includes("red") ? "bg-red-500" : ""
                    }`}
                />
                <li
                    onClick={() => handleColorChange("yellow")}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                        colors.includes("yellow") ? "bg-yellow-500" : ""
                    }`}
                />
            </ul>
        </div>
    );
};

export default Footer;
