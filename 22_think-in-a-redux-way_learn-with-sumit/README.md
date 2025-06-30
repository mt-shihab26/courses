# think-in-a-redux-way

LWS think in a redux way paid course

## Links

-   https://github.com/Learn-with-Sumit/think-in-a-redux-way

## Assignments

-   A1: Scoreboard Application
    -   https://p-nerd-lws-scoreboard.netlify.app
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-1---scoreboard-p-nerd
-   A2: Flight Booking Application
    -   https://p-nerd-lws-flight-booking.netlify.app
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-2---flight-booking-p-nerd
-   A3: Product Cart
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-3---product-cart-p-nerd
    -   https://p-nerd-lws-product-cart.netlify.app
-   A4: Manage Bookstore
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-4--manage-bookstore-p-nerd
    -   https://p-nerd-lws-manage-bookstore.netlify.app
-   A5: Play with Redux Toolkit
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-5---play-with-redux-toolkit-p-nerd
-   A6: Blog Application
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-6--blog-application-p-nerd
    -   https://p-nerd-lws-blog-application.netlify.app
-   A7: Job Finder
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-7---job-finder-p-nerd
    -   https://p-nerd-lws-job-finder.netlify.app
-   A8: Manage Bookstore RTK Query
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-8---bookstore-with-rtk-query-p-nerd
    -   https://p-nerd-lws-manage-bookstore-rtk-query.netlify.app
-   A9: Task Manager with RTK Query
    -   https://github.com/Learn-with-Sumit/batch-2---assignment-9---task-manager-with-rtk-query-p-nerd
    -   https://p-nerd-lws-task-manager.netlify.app
-   A10: Final - EdTech Platform
    -   https://github.com/Learn-with-Sumit/batch-2---final-exam---edtech-platform-p-nerd
    -   https://github.com/p-nerd/edtech_platform
    -   https://p-nerd-learning-portal.netlify.app

# Notes

## React one-way data flow

-   Our application had 3 parts - `state`, view and action
-   `State` is the source of truth that drives our app
-   `View` is the declarative description of the ui based on the current state
-   `Action` are the event that occur in the app based on user input and trigger updates in the state.
-   This is called one-way data flow
-   `View` -> `Action` -> `State`

## What is `Redux`?

-   `Redux` is a flexible State Container for JavaScript Apps that manages our application state separately

## Why redux is Predictable state container

-   Key principles of `Redux`
    -   Sate is an `immutable` object
    -   We `can't mutate` application state, we will always return a `new, modified` state.
    -   All state changes are initiated through `actions`
-   `Unidirectional` Data Flow
    -   `state` -> `action` -> `reducer` -> `state` -> `action`
-   Key principles of `Redux`
    -   Redux is inspired by `Elm architecture` that encourages functional programming principles like `Pure functions`
    -   That means pure functions output is `always same` for same input
    -   Every single state change in reducers has to be taken care of by developers `explicitly`
    -   Reducers are supposed to be `pure` & that's where the predictability comes from
-   Why `Redux` is predictable
    -   because using `Redux` you'll know what every single action in application will do and how `state` will change

## Problems writing Redux

-   Redux requires to much `boilerplate`
    -   Action Types
    -   Action Creators
    -   Switch statements in reducer
    -   Too much modular file structure
-   Other `packages` need to be installed
    -   redux-thunk
    -   redux-devtools
-   Biggest Concern
    -   Immutable state updates

## Redux Toolkit

-   The official, opinionated, batteries-included toolset for efficient Redux development

## RTK Query

-   Data `Fetching` & `Caching` tool
-   What problems does it solve
    -   Tracking `loading`, `error` and `success` state
    -   Avoid `duplicate requests` for same data
    -   `Optimistic` updates to make the UI feels faster
    -   Managing `cache lifetimes` as the user interacts with the UI
    -   React Query also solve same problem
