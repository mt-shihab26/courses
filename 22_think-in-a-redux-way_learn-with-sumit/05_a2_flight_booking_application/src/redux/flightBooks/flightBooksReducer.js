import { FLIGHT_BOOK_ADD, FLIGHT_BOOK_REMOVE } from "./flightBooksActionTypes";

const initialState = [];

const flightBooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIGHT_BOOK_ADD:
            if (state.length === 3) return state;
            const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
            return [...state, { ...action.payload, id }];
        case FLIGHT_BOOK_REMOVE:
            return state.filter(f => f.id !== action.payload);
        default:
            return state;
    }
};

export default flightBooksReducer;
