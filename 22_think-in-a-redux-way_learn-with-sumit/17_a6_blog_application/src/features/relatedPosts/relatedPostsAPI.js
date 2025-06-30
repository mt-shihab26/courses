import http from "../../utils/http";

export const getRelatedPosts = async (tags, id) => {
    const queryString =
        tags.length > 0
            ? tags.map(tag => `tags_like=${tag}`).join("&") + `&id_ne=${id}`
            : `id_ne=${id}`;
    const response = await http.get(`/blogs?${queryString}`);
    return await response.json();
};
