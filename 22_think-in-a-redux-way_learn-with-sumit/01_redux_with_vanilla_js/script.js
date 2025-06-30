const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

const INCREMENT = "increment";
const DECREMENT = "decrement";
const IMMUTABILITY_TEST = "immutability-test";

const initialState = {
    count: 0,
    properties: {
        a: 5,
        b: 6,
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload };
        case DECREMENT:
            return { ...state, count: state.count - action.payload };
        case IMMUTABILITY_TEST:
            return {
                ...state,
                properties: {
                    ...state.properties,
                    b: state.properties.b + 1,
                },
            };
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

const incrementAction = value => ({
    type: INCREMENT,
    payload: value,
});

const decrementAction = value => ({
    type: DECREMENT,
    payload: value,
});

incrementEl.addEventListener("click", () => {
    store.dispatch(incrementAction(5));
});
decrementEl.addEventListener("click", () => {
    store.dispatch(decrementAction(2));
});

const render = () => {
    counterEl.innerText = store.getState().count.toString();
};

// Called on state change
store.subscribe(render);

// Call in initial render
render();
