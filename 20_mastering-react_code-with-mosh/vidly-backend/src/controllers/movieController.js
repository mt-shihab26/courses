const { Router } = require("express");
const asyncWrapper = require("../middlewares/asyncWrapper");
const auth = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const { Movie, updateMovieSchema } = require("../models/movieModel");
const { Genre } = require("../models/genresModel");
const { createMovieSchema } = require("../models/movieModel");
const admin = require("../middlewares/admin");

const createMovie = asyncWrapper(async (req, res, next) => {
    const payload = req.body;
    const genre = await Genre.findById(payload.genreId);
    if (!genre) {
        return res.status(404).json({ message: "Specific genre not found" });
    }
    const movie = new Movie({
        title: payload.title,
        genreId: payload.genreId,
        numberInStock: payload.numberInStock,
        dailyRentalRate: payload.dailyRentalRate,
    });
    await movie.save();
    return res.status(201).json(movie);
});

const getMovies = asyncWrapper(async (req, res, next) => {
    const movies = await Movie.find();
    return res.status(200).json(movies);
});

const getMovie = asyncWrapper(async (req, res, next) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).json(movie);
});

const updateMovie = asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.status(201).json(updatedMovie);
});

const deleteMovie = asyncWrapper(async (req, res, next) => {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }
    await Movie.findByIdAndDelete(movieId);
    return res.status(200).json({ message: "Movie deleted" });
});

const movieRouter = Router();

movieRouter
    .route("/")
    .post(auth, validate(createMovieSchema), createMovie)
    .get(getMovies);

movieRouter
    .route("/:id")
    .get(getMovie)
    .put(auth, validate(updateMovieSchema), updateMovie)
    .delete(auth, admin, deleteMovie);

module.exports = movieRouter;
