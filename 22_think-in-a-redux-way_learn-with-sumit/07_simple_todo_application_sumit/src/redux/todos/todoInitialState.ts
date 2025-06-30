import { TColor } from "../filters/filterInitialState";

export type TTodo = {
    id: number;
    text: string;
    completed: boolean;
    color?: TColor;
};

const todoInitialState: TTodo[] = [
    {
        id: 1,
        text: "Learn React js",
        completed: true,
        color: "red",
    },
    {
        id: 2,
        text: "Learn Redux js",
        completed: false,
    },
];

export default todoInitialState;
