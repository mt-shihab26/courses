import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../../features/relatedPosts/relatedPostsSlice";
import RelatedPostCard from "./RelatedPostCard";

const RelatedPosts = ({ tags, postId }) => {
    const dispatch = useDispatch();

    const { relatedPosts, isLoading, isError } = useSelector(state => state.relatedPosts);

    useEffect(() => {
        dispatch(fetchRelatedPosts({ tags, id: postId }));
    }, [tags, postId]);

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
                Related Posts
            </h4>
            <div className="space-y-4 related-post-container">
                {isLoading ? (
                    <>Loading...</>
                ) : !isError ? (
                    <>
                        {relatedPosts.map(post => (
                            <RelatedPostCard key={post.id} post={post} />
                        ))}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </aside>
    );
};

export default RelatedPosts;
