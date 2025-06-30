import {
    BOOKS_LOADED,
    BOOK_ADDED,
    BOOK_DELETED,
    BOOK_UPDATED,
} from "./booksActionsTypes";

const initialState = [];

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LOADED:
            return [...action.payload];
        case BOOK_ADDED:
            return [...state, action.payload];
        case BOOK_DELETED:
            return state.filter(book => book.id !== action.payload);
        case BOOK_UPDATED:
            return state.map(book =>
                book.id === action.payload.id ? { ...action.payload } : book
            );
        default:
            return state;
    }
};

export default booksReducer;
