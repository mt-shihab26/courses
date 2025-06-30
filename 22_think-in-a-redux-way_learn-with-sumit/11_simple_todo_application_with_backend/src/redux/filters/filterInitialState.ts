export type TStatus = "all" | "complete" | "incomplete";
export type TColor = "red" | "green" | "yellow" | undefined;

export type TFilters = {
    status: TStatus;
    colors: TColor[];
};

const filterInitialState: TFilters = {
    status: "all",
    colors: [],
};

export default filterInitialState;
