import { ITodo, Priority } from "../store/todo/types";
import Todo from "./Todo";

type TodoListProps = {
    todoList: ITodo[];
};

const TodoList = ({ todoList }: TodoListProps) => {
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todoList.map(todo => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    isDone={todo.isDone}
                    priority={todo.priority as Priority}
                />
            ))}
        </div>
    );
};

export default TodoList;
