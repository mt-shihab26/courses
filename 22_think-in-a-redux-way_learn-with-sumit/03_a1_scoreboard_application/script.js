// select dom elements
const allMatchesEl = document.querySelector(".all-matches");
const addMatchButtonEl = document.querySelector(".lws-addMatch");
const resetButtonEl = document.querySelector(".lws-reset");

// action modifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const CREATE_NEW_MATCH = "create-new-match";
const DELETE_A_MATCH = "delete-a-match";

// initial state
const initialState = {
    counters: [{ id: 1, value: 0 }],
};

// reducers
const countersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_MATCH:
            return {
                ...state,
                counters: [
                    ...state.counters,
                    {
                        id: state.counters[state.counters.length - 1].id + 1,
                        value: 0,
                    },
                ],
            };
        case DELETE_A_MATCH:
            return {
                ...state,
                counters: state.counters.filter(c => c.id !== action.payload),
            };
        case INCREMENT:
            return {
                ...state,
                counters: state.counters.map(c => {
                    if (c.id !== action.payload.id) {
                        return { id: c.id, value: c.value };
                    }
                    return {
                        id: c.id,
                        value: c.value + action.payload.value,
                    };
                }),
            };
        case DECREMENT:
            return {
                ...state,
                counters: state.counters.map(c => {
                    if (c.id !== action.payload.id) {
                        return { id: c.id, value: c.value };
                    }
                    const value = c.value - action.payload.value;
                    return {
                        id: c.id,
                        value: value <= 0 ? 0 : value,
                    };
                }),
            };
        case RESET:
            return {
                ...state,
                counters: state.counters.map(c => ({ id: c.id, value: 0 })),
            };
        default:
            return state;
    }
};

const store = Redux.createStore(countersReducer);

// action creator
const incrementAction = (id, value) => ({
    type: INCREMENT,
    payload: { id, value },
});

const decrementAction = (id, value) => ({
    type: DECREMENT,
    payload: { id, value },
});

const restAction = () => ({
    type: RESET,
});

const createNewMatchAction = id => ({
    type: CREATE_NEW_MATCH,
    payload: id,
});

const deleteAMatchAction = id => ({
    type: DELETE_A_MATCH,
    payload: id,
});

// events handlers
const handleDeleteMatch = id => {
    store.dispatch(deleteAMatchAction(id));
};

const handleIncrement = id => {
    const inputEl = document.getElementById(`increment-${id}`);
    store.dispatch(incrementAction(id, Number(inputEl.value)));
    inputEl.value = "";
};

const handleDecrement = id => {
    const inputEl = document.getElementById(`decrement-${id}`);
    store.dispatch(decrementAction(id, Number(inputEl.value)));
    inputEl.value = "";
};

// dom creator functions
const createNewWrapperEl = id => {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("wrapper");

    const deleteButtonEl = document.createElement("button");
    deleteButtonEl.classList.add("lws-delete");
    deleteButtonEl.innerHTML = '<img src="./image/delete.svg" alt="" />';
    deleteButtonEl.addEventListener("click", () => handleDeleteMatch(id));

    const matchNameEl = document.createElement("h3");
    matchNameEl.classList.add("lws-matchName");
    matchNameEl.innerText = `Match ${id}`;

    wrapperEl.appendChild(deleteButtonEl);
    wrapperEl.appendChild(matchNameEl);

    return wrapperEl;
};

const createNewIncrementFormEl = id => {
    const incrementFormEl = document.createElement("form");
    incrementFormEl.classList.add("incrementForm");
    incrementFormEl.innerHTML = `<h4>Increment</h4>
                                <input
                                    type="number"
                                    name="increment"
                                    class="lws-increment"
                                    id="increment-${id}"
                                />`;
    incrementFormEl.addEventListener("submit", e => {
        e.preventDefault();
        handleIncrement(id);
    });
    return incrementFormEl;
};

const createNewDecrementFormEl = id => {
    const decrementFormEl = document.createElement("form");
    decrementFormEl.classList.add("decrementForm");
    decrementFormEl.innerHTML = `<h4>Decrement</h4>
                                <input
                                    type="number"
                                    name="decrement"
                                    class="lws-decrement"
                                    id="decrement-${id}"
                                />
                                `;
    decrementFormEl.addEventListener("submit", e => {
        e.preventDefault();
        handleDecrement(id);
    });
    return decrementFormEl;
};

const createNewIncDecEl = id => {
    const incDecEl = document.createElement("div");
    incDecEl.classList.add("inc-dec");

    incDecEl.appendChild(createNewIncrementFormEl(id));
    incDecEl.appendChild(createNewDecrementFormEl(id));

    return incDecEl;
};

const createNewCountEl = (id, value) => {
    const countEl = document.createElement("div");
    countEl.classList.add("numbers");

    countEl.innerHTML = `<h2 class="lws-singleResult" id="count-${id}">${value}</h2>`;

    return countEl;
};

const createNewMatchEl = (id, value) => {
    const matchEl = document.createElement("div");
    matchEl.classList.add("match");
    matchEl.id = `match-${id}`;

    matchEl.appendChild(createNewWrapperEl(id));
    matchEl.appendChild(createNewIncDecEl(id));
    matchEl.appendChild(createNewCountEl(id, value));

    return matchEl;
};

//redux subscription callback
const render = () => {
    const state = store.getState().counters;
    // console.log(state);
    allMatchesEl.innerHTML = "";
    state.forEach(c => {
        allMatchesEl.appendChild(createNewMatchEl(c.id, c.value));
    });
};

// initial create a counter match
render();

// subscribe to redux
store.subscribe(render);

// create new match by button click
addMatchButtonEl.addEventListener("click", () => {
    store.dispatch(createNewMatchAction());
});

//reset all the counters
resetButtonEl.addEventListener("click", () => {
    store.dispatch(restAction());
});
