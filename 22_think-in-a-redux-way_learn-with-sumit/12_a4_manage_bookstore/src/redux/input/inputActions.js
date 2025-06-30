import { SET_INPUT_BOOK_ID } from "./inputActionsTypes";

export const setInputBookId = bookId => {
    return {
        type: SET_INPUT_BOOK_ID,
        payload: bookId,
    };
};
