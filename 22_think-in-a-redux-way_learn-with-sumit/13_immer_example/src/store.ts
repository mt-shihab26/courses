import { combineReducers, createStore } from "redux";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
