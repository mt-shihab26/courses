import { DECREMENT, INCREMENT } from "./actionTypes";
import { produce } from "immer";
const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            // return {
            //     ...state,
            //     count: state.count + 1,
            // };
            return produce(state, draftState => {
                draftState.count++;
            });

        case DECREMENT:
            // return {
            //     ...state,
            //     count: state.count - 1,
            // };
            return produce(state, draftState => {
                draftState.count--;
            });

        default:
            return state;
    }
};

export default counterReducer;
