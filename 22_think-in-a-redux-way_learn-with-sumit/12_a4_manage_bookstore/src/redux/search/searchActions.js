import { SET_SEARCH } from "./searchActionsTypes";

export const setSearchString = searchString => {
    return {
        type: SET_SEARCH,
        payload: searchString,
    };
};
