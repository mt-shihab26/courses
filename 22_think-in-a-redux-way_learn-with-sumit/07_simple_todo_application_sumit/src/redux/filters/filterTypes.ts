import { TColor, TStatus } from "./filterInitialState";

export const STATUS_CHANGED = "filter/status-changed";
export const COLOR_CHANGED = "filter/color-changed";

export type TStatusChangedAction = {
    type: typeof STATUS_CHANGED;
    payload: TStatus;
};

export type TColorChangedAction = {
    type: typeof COLOR_CHANGED;
    payload: TColor;
};

export type TFilterActions = TColorChangedAction | TStatusChangedAction;
