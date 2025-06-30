import filterInitialState, { TFilters } from "./filterInitialState";
import { COLOR_CHANGED, STATUS_CHANGED, TFilterActions } from "./filterTypes";

const filterReducer = (state: TFilters = filterInitialState, action: TFilterActions) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload,
            };
        case COLOR_CHANGED:
            if (state.colors.includes(action.payload)) {
                return {
                    ...state,
                    colors: state.colors.filter(c => c !== action.payload),
                };
            } else {
                return {
                    ...state,
                    colors: [...state.colors, action.payload],
                };
            }
            return state;
        default:
            return state;
    }
};

export default filterReducer;
