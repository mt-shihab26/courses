import http from "../../utils/http";

export const getVideos = async (selectedTags: string[], searchString: string) => {
    let queryString = "";

    if (selectedTags.length > 0) {
        queryString += selectedTags.map(tag => `tags_like=${tag}`).join("&");
        if (searchString !== "") queryString += "&";
    }

    if (searchString !== "") {
        queryString += `q=${searchString}`;
    }

    const response = await http.get(`/videos?${queryString}`);
    return await response.json();
};
