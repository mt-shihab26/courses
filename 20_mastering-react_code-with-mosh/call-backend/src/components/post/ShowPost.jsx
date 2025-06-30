import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../repository/postRepository";

const ShowPost = () => {
    const [post, setPost] = useState({});
    const postId = useParams().id;

    useEffect(getPost(setPost, postId));

    return (
        <div>
            <h2>{post.title}</h2>
        </div>
    );
};

export default ShowPost;
