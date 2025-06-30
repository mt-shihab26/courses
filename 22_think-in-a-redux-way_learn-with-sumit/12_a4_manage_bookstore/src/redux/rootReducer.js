import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import inputReducer from "./input/inputReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    input: inputReducer,
    search: searchReducer,
});

export default rootReducer;
