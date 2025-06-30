import http from "../../utils/http";

export const getPosts = async (sortType, filterType) => {
    let queryString = "";

    if (sortType === "newest") {
        queryString = `?_sort=createdAt&_order=desc`;
    } else if (sortType === "most_liked") {
        queryString = `?_sort=likes&_order=desc`;
    }

    if (filterType === "saved") {
        queryString += queryString === "" ? "?" : "&";
        queryString += `isSaved_like=true`;
    }

    const response = await http.get(`/blogs${queryString}`);
    return await response.json();
};
