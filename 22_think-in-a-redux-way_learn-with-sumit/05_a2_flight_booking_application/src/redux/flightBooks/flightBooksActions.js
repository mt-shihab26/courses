import { FLIGHT_BOOK_ADD, FLIGHT_BOOK_REMOVE } from "./flightBooksActionTypes";

export const addFlightBookAction = (
    from,
    to,
    date,
    personCount,
    flightClass
) => {
    return {
        type: FLIGHT_BOOK_ADD,
        payload: { from, to, date, personCount, flightClass },
    };
};

export const removeFlightBookAction = id => {
    return {
        type: FLIGHT_BOOK_REMOVE,
        payload: id,
    };
};
