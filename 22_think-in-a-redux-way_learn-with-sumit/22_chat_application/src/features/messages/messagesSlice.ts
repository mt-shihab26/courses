import { createSlice } from "@reduxjs/toolkit";

type InitialState = {};

const initialState: InitialState = {};

const messagesSlice = createSlice({
    name: "conversions",
    initialState,
    reducers: {},
});

export default messagesSlice;
