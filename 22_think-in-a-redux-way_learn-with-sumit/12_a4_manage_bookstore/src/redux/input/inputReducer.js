import { SET_INPUT_BOOK_ID } from "./inputActionsTypes";

const initialState = {
    bookId: -1,
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_BOOK_ID:
            return { ...state, bookId: action.payload };
        default:
            return state;
    }
};

export default inputReducer;
