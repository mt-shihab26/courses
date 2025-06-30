import Joi from "joi-browser";
import { toast } from "react-toastify";
import * as genreRepository from "../../repository/genreRepository.js";
import * as movieRepository from "../../repository/movieRepository.js";
import { CreateUpdateMovie } from "../../model/movieModel.js";
import Form from "../common/Form.jsx";

export default class NewMovie extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: 0,
            dailyRentalRate: 0,
        },
        errors: {},
        genres: [],
    };
    schema = {
        _id: Joi.string().allow(null, ""),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().max(100).min(0).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(100).label("Rate"),
    };

    mapToViewModel = movie => ({
        _id: movie._id,
        title: movie.title,
        genreId: movie.genreId,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate,
    });

    populateGenres = async () => {
        const { genres } = await genreRepository.getGenres();
        this.setState({ genres });
    };

    populateMovies = async () => {
        const movieId = this.props.match.params.id;
        if (movieId === "new") {
            return;
        }
        const { movie } = await movieRepository.getMovie(movieId);

        if (movie === null) {
            this.props.history.replace("/not-found");
            return;
        }

        const mv = this.mapToViewModel(movie);
        this.setState({ data: mv });
    };

    componentDidMount = async () => {
        this.populateGenres();
        this.populateMovies();
    };

    onSubmit = async () => {
        const { data } = this.state;

        const createUpdateMovie = new CreateUpdateMovie(
            data.title,
            data.genreId,
            data.numberInStock,
            data.dailyRentalRate
        );

        const movieId = this.props.match.params.id;
        if (movieId === "new") {
            const { log } = await movieRepository.saveMovie(createUpdateMovie);
            if (log !== null) {
                return toast(log);
            }
        } else {
            const { log } = await movieRepository.updateMovie(movieId, createUpdateMovie);
            if (log !== null) {
                return toast(log);
            }
        }

        this.props.history.push("/movies");
    };

    render = () => {
        return (
            <div>
                <h2>Add new movie</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    };
}
