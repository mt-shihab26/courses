import http from "../../utils/http";

export const getTags = async () => {
    const response = await http.get("/tags");
    return await response.json();
};
