import apiSlice from "../api/apiSlice";

const tasksApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => "/tasks",
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                const { data: task } = await queryFulfilled;
                dispatch(
                    apiSlice.util.updateQueryData(
                        "getTasks",
                        undefined,
                        draft => {
                            return draft.map(t =>
                                t.id === task.id ? task : t
                            );
                        }
                    )
                );
            },
        }),
        deleteTask: builder.mutation({
            query: taskId => ({
                url: `/tasks/${taskId}`,
                method: "DELETE",
            }),
            onQueryStarted: async (taskId, { queryFulfilled, dispatch }) => {
                const pathResult = dispatch(
                    apiSlice.util.updateQueryData(
                        "getTasks",
                        undefined,
                        draft => {
                            return draft.filter(t => t.id !== taskId);
                        }
                    )
                );
                try {
                    await queryFulfilled;
                } catch (err) {
                    pathResult.undo();
                }
            },
        }),
        addTask: builder.mutation({
            query: task => ({
                url: "/tasks",
                method: "POST",
                body: task,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                const { data: task } = await queryFulfilled;
                dispatch(
                    apiSlice.util.updateQueryData(
                        "getTasks",
                        undefined,
                        draft => {
                            draft.push(task);
                        }
                    )
                );
            },
        }),
        getTask: builder.query({
            query: taskId => `/tasks/${taskId}`,
        }),
    }),
});

export const {
    useGetTasksQuery,
    useDeleteTaskMutation,
    useUpdateTaskMutation,
    useAddTaskMutation,
    useGetTaskQuery,
} = tasksApi;
