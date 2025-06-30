import todoInitialState, { TTodo } from "./todoInitialState";
import {
    ADDED,
    ALL_COMPLETED,
    CLEAR_COMPLETED,
    COLOR_SELECTED,
    DELETED,
    TOGGLED,
    TTodoActions,
} from "./todoTypes";

const nextTodoId = (todos: TTodo[]) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
    return maxId + 1;
};

const todoReducer = (state: TTodo[] = todoInitialState, action: TTodoActions) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                },
            ];
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });
        case COLOR_SELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                }
                if (todo.color === color) {
                    return {
                        ...todo,
                        color: undefined,
                    };
                }
                return {
                    ...todo,
                    color: color,
                };
            });
        case DELETED:
            return state.filter(todo => {
                return todo.id !== action.payload;
            });
        case ALL_COMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                };
            });
        case CLEAR_COMPLETED:
            return state.filter(todo => {
                return !todo.completed;
            });
        default:
            return state;
    }
};

export default todoReducer;
