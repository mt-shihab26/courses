import { Dispatch, SetStateAction } from "react";
import { Priority } from "../store/todo/types";

export type SortByDone = "all" | "incomplete" | "complete";
export type SortByPriority = Priority | "none";

type FooterProps = {
    taskLeft: number;
    setSortedBy: Dispatch<SetStateAction<SortByDone>>;
    sortedByPriority: SortByPriority;
    setSortedByPriority: Dispatch<SetStateAction<SortByPriority>>;
};

const Footer = ({ taskLeft, setSortedBy, sortedByPriority, setSortedByPriority }: FooterProps) => {
    const handleSetSortedByPriority = (priority: Priority) => {
        if (sortedByPriority === priority) {
            setSortedByPriority("none");
        } else {
            setSortedByPriority(priority);
        }
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{taskLeft} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => setSortedBy("all")} className="cursor-pointer font-bold">
                    All
                </li>
                <li>|</li>
                <li onClick={() => setSortedBy("incomplete")} className="cursor-pointer">
                    Incomplete
                </li>
                <li>|</li>
                <li onClick={() => setSortedBy("complete")} className="cursor-pointer">
                    Complete
                </li>
                <li></li>
                <li></li>
                <li
                    onClick={() => handleSetSortedByPriority("green")}
                    className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
                ></li>
                <li
                    onClick={() => handleSetSortedByPriority("red")}
                    className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
                ></li>
                <li
                    onClick={() => handleSetSortedByPriority("yellow")}
                    className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
                ></li>
            </ul>
        </div>
    );
};

export default Footer;
