import { useDispatch } from "react-redux";
import { deleteAllTodoDoneAction, updateAllTodoDoneAction } from "../store/todo/actions";
import doubleTick from "./../assets/images/double-tick.png";
import InputTodo from "./InputTodo";

const Header = () => {
    const dispatch = useDispatch();

    const handleAllComplete = () => {
        dispatch(updateAllTodoDoneAction());
    };

    const handleClearAllCompleted = () => {
        dispatch(deleteAllTodoDoneAction());
    };

    return (
        <div>
            <InputTodo />

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={handleAllComplete} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={doubleTick} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={handleClearAllCompleted} className="cursor-pointer">
                    Clear completed
                </li>
            </ul>
        </div>
    );
};

export default Header;
