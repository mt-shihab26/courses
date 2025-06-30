import apiSlice from "../api/apiSlice";
import { TUser } from "./usersTypes";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query<TUser[], string>({
            query: email => `/users?email=${email}`,
        }),
    }),
});

export const { useGetUserQuery } = usersApi;
