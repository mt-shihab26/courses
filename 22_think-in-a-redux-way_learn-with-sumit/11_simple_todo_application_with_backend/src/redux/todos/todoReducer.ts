import type { TTodo } from "./todoInitialState";
import todoInitialState from "./todoInitialState";
import type { TTodoActions } from "./todoTypes";
import {
    ADDED,
    ALL_COMPLETED,
    CLEAR_COMPLETED,
    DELETED_TODO,
    LOADED,
    UPDATE_TODO,
} from "./todoTypes";

const todoReducer = (state: TTodo[] = todoInitialState, action: TTodoActions) => {
    switch (action.type) {
        case ADDED:
            return [...state, action.payload];
        case UPDATE_TODO:
            return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
        case DELETED_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case ALL_COMPLETED:
            return state.map(todo => ({ ...todo, completed: true }));
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);
        case LOADED:
            return [...action.payload];
        default:
            return state;
    }
};

export default todoReducer;
