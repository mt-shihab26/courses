import { SET_SEARCH } from "./searchActionsTypes";

const initialState = {
    searchString: "",
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, searchString: action.payload };
        default:
            return state;
    }
};

export default searchReducer;
