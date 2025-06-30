import http from "../../utils/http";

export const getPost = async postId => {
    const response = await http.get(`/blogs/${postId}`);
    return await response.json();
};

export const updatePost = async (postId, properties) => {
    const response = await http.patch(`/blogs/${postId}`, properties);
    return await response.json();
};
