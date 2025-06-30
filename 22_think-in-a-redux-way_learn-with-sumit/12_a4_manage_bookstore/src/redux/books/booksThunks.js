import { bookLoaded, bookAdded, bookDeleted, bookUpdate } from "./booksActions";

const BASE_API_URL = "http://localhost:9000";

export const fetchBooks = () => async dispatch => {
    const response = await fetch(`${BASE_API_URL}/books`);
    const books = await response.json();
    dispatch(bookLoaded(books));
};

export const addBook = book => async dispatch => {
    const response = await fetch(`${BASE_API_URL}/books`, {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const savedBook = await response.json();
    dispatch(bookAdded(savedBook));
};

export const deletedBook = bookId => async dispatch => {
    await fetch(`${BASE_API_URL}/books/${bookId}`, { method: "DELETE" });
    dispatch(bookDeleted(bookId));
};

export const updateBook = book => async dispatch => {
    const response = await fetch(`${BASE_API_URL}/books/${book.id}`, {
        method: "PUT",
        body: JSON.stringify(book),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });

    const updatedBook = await response.json();
    dispatch(bookUpdate(updatedBook));
};
