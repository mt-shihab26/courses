import { useDispatch } from "react-redux";
import { deleteTodoAction, updateTodoAction } from "../store/todo/actions";
import { Priority } from "../store/todo/types";
import cancel from "./../assets/images/cancel.png";

type TodoProps = {
    id: number;
    text: string;
    isDone: boolean;
    priority: Priority;
};

const Todo = ({ id, text, isDone, priority }: TodoProps) => {
    const dispatch = useDispatch();

    const handleChangeIsDone = () => {
        dispatch(updateTodoAction({ id: id, isDone: !isDone }));
    };

    const handleChangePriority = (tPriority: Priority) => {
        if (priority !== tPriority) {
            dispatch(updateTodoAction({ id: id, priority: tPriority }));
        }
    };

    const handleDeleteTodo = () => {
        dispatch(deleteTodoAction(id));
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`rounded-full border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500 ${
                    isDone ? "bg-green-500" : "bg-white"
                }`}
            >
                <input
                    type="checkbox"
                    className="opacity-0 absolute rounded-full"
                    onClick={handleChangeIsDone}
                />
                <svg
                    className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
            </div>

            <div className={"select-none flex-1 " + (isDone ? "line-through" : "")}>{text}</div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
                    priority === "green" ? "bg-green-500" : ""
                }`}
                onClick={() => handleChangePriority("green")}
            ></div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
                    priority === "yellow" ? "bg-yellow-500" : ""
                }`}
                onClick={() => handleChangePriority("yellow")}
            ></div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
                    priority === "red" ? "bg-red-500" : ""
                }`}
                onClick={() => handleChangePriority("red")}
            ></div>

            <img
                src={cancel}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={handleDeleteTodo}
            />
        </div>
    );
};

export default Todo;
