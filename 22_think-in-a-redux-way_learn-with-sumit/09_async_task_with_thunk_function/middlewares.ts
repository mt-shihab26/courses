import { AnyAction, Dispatch, Middleware } from "redux";

let ct: number = 1;

export const commonMiddleware: Middleware<{}, any, Dispatch<AnyAction>> =
    store => next => action => {
        console.log("called ", ct, action);
        ct++;
        return next(action);
    };

export const delayActionMiddleware: Middleware<{}, any, Dispatch<AnyAction>> =
    store => next => action => {
        if (action.type === "todos/add-todo") {
            console.log("I am delaying you");

            setTimeout(() => {
                next(action);
            }, 2000);
            return;
        }
        return next(action);
    };

export const fetchAsyncMiddleware: Middleware<{}, any, Dispatch<AnyAction>> =
    store => next => async action => {
        if (typeof action === "function") {
            action(store.dispatch, store.getState);
            return;
        }
        return next(action);
    };
