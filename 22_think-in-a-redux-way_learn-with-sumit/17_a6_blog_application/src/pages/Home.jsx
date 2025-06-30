import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/home/PostCard";
import Sidebar from "../components/home/Sidebar";
import { fetchPosts } from "../features/posts/postsSlice";

const Home = () => {
    const dispatch = useDispatch();

    const { posts, isLoading, isError, error } = useSelector(state => state.posts);
    const { sortType, filterType } = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchPosts({ sortType, filterType }));
    }, [sortType, filterType]);

    return (
        <section className="wrapper">
            <Sidebar />
            <main className="post-container" id="lws-postContainer">
                {isLoading ? (
                    <>loading...</>
                ) : isError || posts.length === 0 ? (
                    <>{error ? error : "Posts is empty"}</>
                ) : (
                    <>
                        {posts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </>
                )}
            </main>
        </section>
    );
};

export default Home;
