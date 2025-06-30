import { createSlice } from "@reduxjs/toolkit";
import { AuthResponse } from "./authTypes";

type InitialState = AuthResponse & {};

const initialState: InitialState = {
    accessToken: "",
    user: {
        id: 0,
        email: "",
        name: "",
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: state => {
            localStorage.removeItem("auth");
            state.accessToken = "";
            state.user = {
                id: 0,
                email: "",
                name: "",
            };
        },
    },
});

export default authSlice;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
