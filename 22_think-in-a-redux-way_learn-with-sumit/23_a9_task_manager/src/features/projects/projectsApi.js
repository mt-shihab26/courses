import apiSlice from "../api/apiSlice";
import { setProjectToSelected } from "../filter/filterSlice";

const projectsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query({
            query: () => "/projects",
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                const { data: projects } = await queryFulfilled;
                const projectsIds = projects.map(project => project.id);
                dispatch(setProjectToSelected(projectsIds));
            },
        }),
    }),
});

export const { useGetProjectsQuery } = projectsApi;

export default projectsApi;
