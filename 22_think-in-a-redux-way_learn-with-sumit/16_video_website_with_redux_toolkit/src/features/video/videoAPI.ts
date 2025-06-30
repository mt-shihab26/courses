import http from "../../utils/http";

export const getVideo = async (id: number) => {
    const response = await http.get(`/videos/${id}`);
    return await response.json();
};
