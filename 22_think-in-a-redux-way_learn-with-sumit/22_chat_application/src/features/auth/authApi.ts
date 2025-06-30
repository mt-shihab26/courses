import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
import { AuthResponse, RegisterRequest, LoginRequest } from "./authTypes";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation<AuthResponse, RegisterRequest>({
            query: data => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result.data));
                    dispatch(userLoggedIn(result.data));
                } catch (e: any) {}
            },
        }),
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: data => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result.data));
                    dispatch(userLoggedIn(result.data));
                } catch (e: any) {}
            },
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
