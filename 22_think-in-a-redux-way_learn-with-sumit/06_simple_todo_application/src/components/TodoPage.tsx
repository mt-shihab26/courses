import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../store/store";
import { ITodo } from "../store/todo/types";
import Footer, { SortByDone, SortByPriority } from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";

const TodoPage = () => {
    const todoList = useSelector((state: State) => state.todoList);

    const [sortedByDone, setSortedByDone] = useState<SortByDone>("all");
    const [sortedByPriority, setSortedByPriority] =
        useState<SortByPriority>("none");

    const leftTask = todoList.filter(todo => !todo.isDone).length;

    console.log("Before sort: ", todoList);

    const filter = (): ITodo[] => {
        if (sortedByDone == "all") {
            return todoList;
        }
        if (sortedByDone === "complete") {
            return todoList.filter(todo => todo.isDone);
        }
        if (sortedByDone === "incomplete") {
            return todoList.filter(todo => !todo.isDone);
        }
        return todoList;
    };

    const filterTodo = filter();

    // const filteredByPriorityTodoList =
    //     sortedByPriority === "green"
    //         ? todoList.filter(todo => todo.priority === "green")
    //         : sortedByPriority === "red"
    //         ? todoList.filter(todo => todo.priority === "red")
    //         : sortedByPriority === "yellow"
    //         ? todoList.filter(todo => todo.priority === "red")
    //         : "";

    console.log(`After sort (by ${sortedByDone}): `, filterTodo);

    return (
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            <Header />
            <hr className="mt-4" />
            <TodoList todoList={filterTodo} />
            <hr className="mt-4" />
            <Footer
                taskLeft={leftTask}
                setSortedBy={setSortedByDone}
                sortedByPriority={sortedByPriority}
                setSortedByPriority={setSortedByPriority}
            />
        </div>
    );
};

export default TodoPage;
