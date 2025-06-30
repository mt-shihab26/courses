import type { TColor } from "../filters/filterInitialState";

export const ADDED = "todo/added";
export const TOGGLED = "todo/toggled";
export const COLOR_SELECTED = "todo/color-selected";
export const DELETED = "todo/deleted";
export const ALL_COMPLETED = "todo/all-completed";
export const CLEAR_COMPLETED = "todo/clear-completed";

export type TAddedAction = {
    type: typeof ADDED;
    payload: string;
};

export type TToggledAction = {
    type: typeof TOGGLED;
    payload: number;
};

export type TColorSelectedPayload = {
    todoId: number;
    color: TColor;
};

export type TColorSelectedAction = {
    type: typeof COLOR_SELECTED;
    payload: TColorSelectedPayload;
};

export type TDeletedAction = {
    type: typeof DELETED;
    payload: number;
};

export type TAllCompletedAction = {
    type: typeof ALL_COMPLETED;
};

export type TClearCompletedAction = {
    type: typeof CLEAR_COMPLETED;
};

export type TTodoActions =
    | TAddedAction
    | TToggledAction
    | TColorSelectedAction
    | TDeletedAction
    | TAllCompletedAction
    | TClearCompletedAction;
