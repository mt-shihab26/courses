import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GoHome from "../components/post/GoHome";
import PostDetails from "../components/post/PostDetails";
import RelatedPosts from "../components/post/RelatedPosts";
import { fetchPost } from "../features/post/postSlice";

const Post = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();

    const { post, isLoading, isError, error } = useSelector(state => state.post);

    useEffect(() => {
        dispatch(fetchPost({ postId }));
    }, [postId]);

    return (
        <div>
            <GoHome />
            <section className="post-page-container">
                {isLoading ? (
                    <>Loading...</>
                ) : isError || !post ? (
                    <>{error ? error : "There is not post"} </>
                ) : (
                    <>
                        <PostDetails post={post} />
                        <RelatedPosts tags={post.tags} postId={postId} />
                    </>
                )}
            </section>
        </div>
    );
};

export default Post;
