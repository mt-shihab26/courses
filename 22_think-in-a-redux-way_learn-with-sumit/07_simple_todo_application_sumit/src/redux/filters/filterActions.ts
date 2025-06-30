import type { TColor, TStatus } from "./filterInitialState";
import {
    COLOR_CHANGED,
    STATUS_CHANGED,
    TColorChangedAction,
    TStatusChangedAction,
} from "./filterTypes";

export const statusChanged = (status: TStatus): TStatusChangedAction => {
    return {
        type: STATUS_CHANGED,
        payload: status,
    };
};

export const colorChanged = (color: TColor): TColorChangedAction => {
    return {
        type: COLOR_CHANGED,
        payload: color,
    };
};
