import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todo/actions";
import { Priority } from "../store/todo/types";
import notes from "./../assets/images/notes.png";
import plus from "./../assets/images/plus.png";

const InputTodo = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todo = {
            text: text,
            isDone: false,
            priority: "yellow" as Priority,
        };
        dispatch(addTodoAction(todo));
        setText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
            <img src={notes} className="w-6 h-6" alt="Add todo" />
            <input
                type="text"
                placeholder="Type your todo"
                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                type="submit"
                style={{ backgroundImage: `url(${plus})` }}
                className="appearance-none w-8 h-8 bg-no-repeat bg-contain"
            ></button>
        </form>
    );
};

export default InputTodo;
