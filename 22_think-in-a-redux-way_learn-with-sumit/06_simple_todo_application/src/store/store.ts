import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "./middlewares/logger";
import todoReducer from "./todo/reducer";
import { ITodo } from "./todo/types";

export interface State {
    todoList: ITodo[];
}

const rootReducer = combineReducers({
    todoList: todoReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
