type Action = {
    type: string;
    payload: number;
};

const actions: Action[] = [
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "increment", payload: 1 },
    { type: "decrement", payload: 1 },
];

const initialState = {
    value: 0,
};
type InitialState = typeof initialState;

// reducer reduce all the actions to single state
const reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                value: state.value + 1,
            };
        case "decrement":
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return { ...state };
    }
};

const finalResult = actions.reduce(reducer, initialState);

console.log(finalResult);
