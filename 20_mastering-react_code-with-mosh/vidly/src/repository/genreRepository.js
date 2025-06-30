import { toast } from "react-toastify";
import { SERVER_ROOT_URI } from "../service/env.js";
import { Genre } from "../model/genreModel.js";
import hc from "../service/httpClient.js";

/**
 * @returns {Promise<{status: number, genres: Genre[]}>}
 */
export const getGenres = async () => {
    const { data, status } = await hc.get(`${SERVER_ROOT_URI}/genres`);
    const genres = data.map(genre => new Genre(genre._id, genre.name));
    return { genres, status };
};

/**
 *
 * @param {string} genreId
 * @returns {Promise<{status: number, genres: Genre}>}
 */
export const getGenre = async genreId => {
    const { data, status } = await hc.get(`${SERVER_ROOT_URI}/genres/${genreId}`);
    const genre = new Genre(data._id, data.name);
    return { genre, status };
};

export const getGenreByName = name => genres.find(genre => genre.name === name);

export const saveGenre = genre => {
    genres.push(new Genre(genre._id, genre.name));
};

export const updateGenre = (_id, genre) => {
    const index = genres.findIndex(genreH => genreH._id === _id);
    if (index === -1) {
        toast("Genre not found");
        return null;
    }

    genres[index] = new Genre(_id, genre.name);
    return genres[index];
};
