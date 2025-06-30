import { useDispatch } from "react-redux";
import { TColor } from "../redux/filters/filterInitialState";
import { colorSelected, deleted, toggled } from "../redux/todos/todoActions";
import { TTodo } from "../redux/todos/todoInitialState";
import cancelImage from "./../assets/images/cancel.png";

type TodoProps = {
    todo: TTodo;
};

const Todo = ({ todo }: TodoProps) => {
    const dispatch = useDispatch();

    const { text, id, completed, color } = todo;

    const handleStatusChange = () => {
        dispatch(toggled(id));
    };

    const handleColorChange = (color: TColor) => {
        dispatch(colorSelected(id, color));
    };

    const handleDeleteTodo = () => {
        dispatch(deleted(id));
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed && "border-green-500 focus-within:border-green-500"
                }`}
            >
                <input
                    value={completed ? 1 : 0}
                    onChange={handleStatusChange}
                    type="checkbox"
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>
            <div className={`select-none flex-1 ${completed ? "line-through" : ""}`}>{text}</div>

            <div
                onClick={() => handleColorChange("green")}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
                    color === "green" && "bg-green-500"
                }`}
            />
            <div
                onClick={() => handleColorChange("yellow")}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
                    color === "yellow" && "bg-yellow-500"
                }`}
            />
            <div
                onClick={() => handleColorChange("red")}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
                    color === "red" && "bg-red-500"
                }`}
            />
            <img
                onClick={handleDeleteTodo}
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
            />
        </div>
    );
};

export default Todo;
