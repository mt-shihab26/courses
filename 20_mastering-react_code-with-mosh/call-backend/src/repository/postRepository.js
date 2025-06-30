import httpClient from "../utils/httpClient.js";
import config from "../../app.config.js";

const S_ROOT_URI = config.SERVER_ROOT_URI;

/**
 * Get array of posts
 * @returns {[]Post}
 */
export const getPosts = async () => {
    const { data: posts } = await httpClient.get(`${S_ROOT_URI}/posts`);
    return posts;
};

/**
 * Set one post in setPost hook
 * @param {SetStateHook} setPost
 * @param {string} postId
 * @returns {cbFunction}
 */
export const getPost = (setPost, postId) => () => {
    const fetchData = async () => {
        const { data: post } = await httpClient.get(
            `${S_ROOT_URI}/posts/${postId}`
        );
        setPost(post);
    };
    fetchData().catch(console.error);
};

/**
 * Get one post by id
 * @param {string} postId
 * @returns {Post}
 */
export const getPost2 = async postId => {
    const { data: post } = await httpClient.get(
        `${S_ROOT_URI}/posts/${postId}`
    );
    return post;
};

/**
 * Creating Post in server
 * @param {Post} post
 * @returns {Post}
 */
export const savePost = async post => {
    const { data: newPost } = await httpClient.post(
        `${S_ROOT_URI}/posts/`,
        post
    );
    console.log(newPost);
    return newPost;
};

/**
 * Updating Post with id;
 * @param {string} postId
 * @param {Post} post
 * @returns {Post}
 */
export const updatePost = async (postId, post) => {
    // const { data: newPost } = await httpClient.put(`${S_ROOT_URI}/posts/${postId}`, post);
    const { data: newPost } = await httpClient.patch(
        `${S_ROOT_URI}/posts/${postId}`,
        {
            title: post.title,
        }
    );
    return newPost;
};

/**
 * Delete the post by given id
 * @param {string} postId
 * @returns {string}
 */
export const deletePost = postId => {
    httpClient.delete(`${S_ROOT_URI}/posts/${postId}`);
};
