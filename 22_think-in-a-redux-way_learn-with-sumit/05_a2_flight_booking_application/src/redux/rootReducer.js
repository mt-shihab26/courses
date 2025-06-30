import { combineReducers } from "redux";
import flightBooksReducer from "./flightBooks/flightBooksReducer";

const rootReducer = combineReducers({
    flightBooks: flightBooksReducer,
});

export default rootReducer;
