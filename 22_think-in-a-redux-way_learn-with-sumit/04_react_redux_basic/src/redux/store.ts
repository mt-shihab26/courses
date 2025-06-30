import { applyMiddleware, createStore } from "redux";
import { myLogger } from "./middlewares/myLogger";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store;
