import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/todoActions";
import tickImage from "./../assets/images/double-tick.png";
import notesImage from "./../assets/images/notes.png";
import plusImage from "./../assets/images/plus.png";

const Header = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(added(text));
        setText("");
    };

    const handleCompleteAllTasks = () => {
        dispatch(allCompleted());
    };

    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img src={notesImage} className="w-6 h-6" alt="Add todo" />
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                />
            </form>
            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={handleCompleteAllTasks} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={handleClearCompleted} className="cursor-pointer">
                    Clear completed
                </li>
            </ul>
        </div>
    );
};

export default Header;
