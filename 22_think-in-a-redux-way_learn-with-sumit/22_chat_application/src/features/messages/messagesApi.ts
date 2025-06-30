import { io } from "socket.io-client";
import { BASE_URL, MESSAGES_PER_PAGE } from "../../utils/env";
import apiSlice from "../api/apiSlice";
import { TAddMessage, TMessage } from "./messagesTypes";

export const messagesApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query<TMessage[], number>({
            query: conversationId =>
                `/messages` +
                `?conversationId_like=${conversationId}` +
                `&_sort=timestamp&_order=desc` +
                `&_page=1&_limit=${MESSAGES_PER_PAGE}`,
            onCacheEntryAdded: async (
                conversationId,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            ) => {
                // create websocket
                const socket = io(BASE_URL, {
                    reconnectionDelay: 1000,
                    reconnection: true,
                    reconnectionAttempts: 10,
                    transports: ["websocket"],
                    agent: false,
                    upgrade: false,
                    rejectUnauthorized: false,
                });
                try {
                    await cacheDataLoaded;
                    socket.on("message", data => {
                        console.log(data);
                        updateCachedData(draft => {
                            if (data?.data?.conversationId == conversationId) {
                                draft.push(data?.data);
                            }
                        });
                    });
                } catch (err: any) {}

                await cacheEntryRemoved;
                socket.close();
            },
        }),
        addMessage: builder.mutation<TMessage, TAddMessage>({
            query: data => ({
                url: "/messages",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetMessagesQuery } = messagesApi;
