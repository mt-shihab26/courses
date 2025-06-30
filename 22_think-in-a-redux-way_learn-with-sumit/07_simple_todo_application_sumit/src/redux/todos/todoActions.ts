import { TColor } from "../filters/filterInitialState";
import type {
    TAddedAction,
    TAllCompletedAction,
    TClearCompletedAction,
    TColorSelectedAction,
    TDeletedAction,
    TToggledAction,
} from "./todoTypes";
import {
    ADDED,
    ALL_COMPLETED,
    CLEAR_COMPLETED,
    COLOR_SELECTED,
    DELETED,
    TOGGLED,
} from "./todoTypes";

export const added = (todoText: string): TAddedAction => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

export const toggled = (todoId: number): TToggledAction => {
    return {
        type: TOGGLED,
        payload: todoId,
    };
};

export const colorSelected = (todoId: number, color: TColor): TColorSelectedAction => {
    return {
        type: COLOR_SELECTED,
        payload: {
            todoId,
            color,
        },
    };
};

export const deleted = (todoId: number): TDeletedAction => {
    return {
        type: DELETED,
        payload: todoId,
    };
};

export const allCompleted = (): TAllCompletedAction => {
    return {
        type: ALL_COMPLETED,
    };
};

export const clearCompleted = (): TClearCompletedAction => {
    return {
        type: CLEAR_COMPLETED,
    };
};
