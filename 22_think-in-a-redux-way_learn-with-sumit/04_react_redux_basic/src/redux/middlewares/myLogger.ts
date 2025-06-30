import rootReducer from "../rootReducer";

export const myLogger = (store: any) => (next: any) => (action: any) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before State: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

    return next(action);
};
