import { combineReducers } from "redux";
import { TFilters } from "./filters/filterInitialState";
import filterReducer from "./filters/filterReducer";
import { TTodo } from "./todos/todoInitialState";
import todoReducer from "./todos/todoReducer";

export type TState = {
    todos: TTodo[];
    filters: TFilters;
};

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
});

export default rootReducer;
