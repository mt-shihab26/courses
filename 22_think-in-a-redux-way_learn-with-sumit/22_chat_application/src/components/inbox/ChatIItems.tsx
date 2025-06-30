import gravatarUrl from "gravatar-url";
import moment from "moment";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import conversionsApi, {
    useGetConversionsQuery,
} from "../../features/conversations/conversationsApi";
import { CONVERSIONS_PER_PAGE } from "../../utils/env";
import { getPartnerInfo } from "../../utils/func";
import ChatItem from "./ChatItem";

const ChatItems = () => {
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const {
        user: { email },
    } = useAppSelector(state => state.auth);

    const { data, isLoading, isError, error } = useGetConversionsQuery(email);

    const error2: any = error;

    useEffect(() => {
        if (data && data?.totalCount > 0) {
            const more =
                Math.ceil(data.totalCount / Number(CONVERSIONS_PER_PAGE)) >
                page;
            setHasMore(more);
        }
    }, [data, page]);

    useEffect(() => {
        if (page > 1) {
            dispatch(
                conversionsApi.endpoints.getMoreConversions.initiate({
                    email,
                    page,
                })
            );
        }
    }, [page, email]);

    return (
        <ul>
            {isLoading ? (
                <li>Loading...</li>
            ) : isError ? (
                <li>{error2?.error}</li>
            ) : data && data?.data?.length === 0 ? (
                <li>There is no conversions by the user</li>
            ) : (
                <li>
                    <InfiniteScroll
                        next={() => setPage(prev => prev + 1)}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        dataLength={data?.data?.length || 0}
                        height={window.innerHeight - 129}
                    >
                        {data?.data?.map(item => {
                            const { id, message, users, timestamp } = item;
                            const otherUser = getPartnerInfo(users, email);

                            return (
                                <Link key={id} to={`/inbox/${id}`}>
                                    <ChatItem
                                        avatar={gravatarUrl(otherUser.email, {
                                            size: 80,
                                        })}
                                        name={otherUser.name}
                                        lastMessage={message}
                                        lastTime={moment(timestamp).fromNow()}
                                    />
                                </Link>
                            );
                        })}
                    </InfiniteScroll>
                </li>
            )}
        </ul>
    );
};

export default ChatItems;
