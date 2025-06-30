import apiSlice from "../api/apiSlice";

const teamApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTeams: builder.query({
            query: () => "/team",
        }),
    }),
});

export const { useGetTeamsQuery } = teamApi;

export default teamApi;
