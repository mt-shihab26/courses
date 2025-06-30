import {
    BOOKS_LOADED,
    BOOK_ADDED,
    BOOK_DELETED,
    BOOK_UPDATED,
} from "./booksActionsTypes";

export const bookLoaded = books => {
    return {
        type: BOOKS_LOADED,
        payload: books,
    };
};

export const bookAdded = book => {
    return {
        type: BOOK_ADDED,
        payload: book,
    };
};

export const bookDeleted = bookId => {
    return {
        type: BOOK_DELETED,
        payload: bookId,
    };
};

export const bookUpdate = book => {
    return {
        type: BOOK_UPDATED,
        payload: book,
    };
};
