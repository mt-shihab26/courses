import http from "../../utils/http";

export const getRelatedVideos = async (tags: string[], id: number) => {
    const limit = 5;
    const queryString =
        tags.length > 0
            ? tags.map(tag => `tags_like=${tag}`).join("&") +
              `&id_ne=${id}&_limit=${limit}`
            : `id_ne=${id}&_limit=${limit}`;
    const response = await http.get(`/videos?${queryString}`);
    return await response.json();
};
