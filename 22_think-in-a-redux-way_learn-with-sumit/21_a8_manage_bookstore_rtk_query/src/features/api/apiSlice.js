import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    tagTypes: ["Books"],
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => `/books`,
            providesTags: ["Books", "Book"],
        }),
        getBook: builder.query({
            query: id => `/books/${id}`,
            providesTags: (resut, error, id) => [{ type: "Book", id }],
        }),
        addBook: builder.mutation({
            query: data => ({ url: `/books`, method: "POST", body: data }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: builder.mutation({
            query: id => ({ url: `/books/${id}`, method: "DELETE" }),
            invalidatesTags: ["Books"],
        }),
        editBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (resut, error, { id }) => ["Books", { type: "Book", id }],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useAddBookMutation,
    useDeleteBookMutation,
    useEditBookMutation,
    useGetBookQuery,
} = apiSlice;
