import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TVideo = {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    duration: string;
    views: string;
    link: string;
    thumbnail: string;
};

export type TAddVideo = {
    title: string;
    description: string;
    author: string;
    date: string;
    duration: string;
    views: string;
    link: string;
    thumbnail: string;
};

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["Videos", "Video", "RelatedVideos"],
    endpoints: builder => ({
        getVideos: builder.query<TVideo[], void>({
            query: () => `/videos`,
            keepUnusedDataFor: 10 * 60,
            providesTags: ["Videos"],
        }),
        getVideo: builder.query<TVideo, number>({
            query: id => `/videos/${id}`,
            providesTags: (result, error, id) => [{ type: "Video", id }] as any,
        }),
        getRelatedVideos: builder.query<TVideo[], { id: number; title: string }>({
            query: ({ id, title }) => {
                const tags = title.split(" ");
                const likes = tags.map(tag => `title_like=${tag}`);
                const queryString = `/videos?${likes.join("&")}&&id_ne=${id}&_limit=4`;
                return queryString;
            },
            providesTags: (result, error, { id }) =>
                [{ type: "RelatedVideos", id }] as any,
        }),
        addVideo: builder.mutation<TVideo, TAddVideo>({
            query: data => ({ url: `/videos`, method: "POST", body: data }),
            invalidatesTags: ["Videos"],
        }),
        editVideo: builder.mutation<TVideo, { id: number; data: TAddVideo }>({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, { id }) =>
                ["Videos", { type: "Video", id }, { type: "RelatedVideos", id }] as any,
        }),
        deleteVideo: builder.mutation<TVideo, number>({
            query: id => ({ url: `/videos/${id}`, method: "DELETE" }),
            invalidatesTags: ["Videos"],
        }),
    }),
});

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
    useEditVideoMutation,
    useDeleteVideoMutation,
} = apiSlice;
