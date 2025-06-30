import { SERVER_ROOT_URI } from "../service/env.js";
import { CreateUpdateMovie, Movie } from "../model/movieModel.js";
import hc from "../service/httpClient.js";

const MOVIES_END_POINT = `${SERVER_ROOT_URI}/movies`;
const getOneMovieEndPoint = movieId => `${SERVER_ROOT_URI}/movies/${movieId}`;

/**
 * @returns {Promise<{status: number, movie: Movie[]}>}
 */
export const getMovies = async () => {
    const r = await hc.get(MOVIES_END_POINT);

    const status = r.status;
    const movies = r.data.map(movie => {
        return new Movie(
            movie._id,
            movie.title,
            movie.genreId,
            movie.numberInStock,
            movie.dailyRentalRate,
            false
        );
    });

    return { movies, status };
};

export const getMovie = async p_MovieId => {
    const r = await hc.get(getOneMovieEndPoint(p_MovieId));

    const status = r.status;
    const movie = new Movie(
        r.data._id,
        r.data.title,
        r.data.genreId,
        r.data.numberInStock,
        r.data.dailyRentalRate,
        false
    );

    return { status, movie };
};

/**
 * @param {CreateUpdateMovie} p_Movie
 * @returns {Promise<{status: number, movie: Movie, log: string}>}
 */
export const saveMovie = async p_Movie => {
    let status = null,
        log = null,
        movie = null;
    try {
        const r = await hc.post(MOVIES_END_POINT, p_Movie);

        status = r.status;
        movie = new Movie(
            r.data._id,
            r.data.title,
            r.data.genreId,
            r.data.numberInStock,
            r.data.dailyRentalRate,
            false
        );
    } catch (e) {
        status = e.response.status;
        if (status === 401 || status === 400) {
            log = "Unauthenticated User can't create new movie";
        } else {
            log = "Movie can not saved";
        }
        movie = null;
    }

    return { movie, status, log };
};

/**
 * @param {string} p_MovieId
 * @param {CreateUpdateMovie} p_Movie
 * @returns {Promise<{status: number, movie: Movie, log: string}>}
 */
export const updateMovie = async (p_MovieId, p_Movie) => {
    let status = null,
        log = null,
        movie = null;
    try {
        const r = await hc.put(getOneMovieEndPoint(p_MovieId), p_Movie);

        status = r.status;
        movie = new Movie(
            r.data._id,
            r.data.title,
            r.data.genreId,
            r.data.numberInStock,
            r.data.dailyRentalRate,
            false
        );
    } catch (e) {
        status = e.response.status;
        if (status === 401 || status === 400) {
            log = "Unauthenticated User can't update movie";
        } else {
            log = "Movie can not update";
        }
        movie = null;
    }

    return { movie, status, log };
};

/**
 * @param {string} p_MovieId
 * @returns {status: number, log: string}
 */
export const deleteMovie = async p_MovieId => {
    let status = null;
    let log = null;
    try {
        const r = await hc.delete(getOneMovieEndPoint(p_MovieId));

        status = r.status;
    } catch (e) {
        status = e.response.status;
        if (status === 404) {
            log = "Movie can't found 2";
        } else if (status === 403) {
            log = "Movie can't found forbidden";
        } else {
            log = "Movie can't delete something failure in client";
        }
    }
    return { status, log };
};
