import { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as movieRepository from "../../repository/movieRepository.js";
import * as genreRepository from "../../repository/genreRepository.js";
import * as movieService from "../../service/movieService.js";
import * as authService from "../../service/authService.js";
import { Genre } from "../../model/genreModel.js";
import GenreList from "../GenreList.jsx";
import Pagination from "../common/Pagination.jsx";
import MoviesTable from "./MoviesTable.jsx";
import SearchBox from "./SearchBox.jsx";

export default class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        selectedGenreId: "1",
        sortFiled: { filed: "title", order: "asc" },
        isSearching: false,
        searchString: "",
    };

    componentDidMount = async () => {
        const { genres } = await genreRepository.getGenres();
        const { movies } = await movieRepository.getMovies();

        this.setState({
            movies: [...movies],
            genres: [new Genre("1", "All Genres"), ...genres],
            selectedGenre: "1",
        });
    };

    sortingMovies = _movies => {
        const movies = [..._movies];
        const { sortFiled } = this.state;
        movies.sort((a, b) => {
            let tmp =
                a[sortFiled.filed] > b[sortFiled.filed]
                    ? 1
                    : a[sortFiled.filed] === b[sortFiled.filed]
                    ? 0
                    : -1;
            if (sortFiled.order === "dsc") tmp = -tmp;
            return tmp;
        });
        return movies;
    };

    filter = movies => {
        const { selectedGenreId, isSearching, searchString } = this.state;
        if (isSearching) {
            return movieService.filterBySearch(movies, searchString);
        }
        return movieService.filterMoviesByGenre(movies, selectedGenreId);
    };

    handleDelete = async movieId => {
        const {
            movies: originalMovies,
            pageSize,
            currentPage,
            selectedGenreId,
        } = this.state;

        const filteredMovies = movieService
            .filterMoviesByGenre(originalMovies, selectedGenreId)
            .filter(movie => movie._id !== movieId);

        const movies = originalMovies.filter(movie => movie._id !== movieId);

        const currentPageStart = pageSize * (currentPage - 1);

        if (currentPageStart >= filteredMovies.length && filteredMovies.length > 0) {
            this.setState({ movies, currentPage: currentPage - 1 });
        } else {
            this.setState({ movies });
        }

        const { status, log } = await movieRepository.deleteMovie(movieId);
        if (log !== null) {
            toast(log);
        }
        if (status !== 200) {
            if (currentPageStart >= filteredMovies.length && filteredMovies.length > 0) {
                this.setState({ movies: originalMovies, currentPage: currentPage + 1 });
            } else {
                this.setState({ movies: originalMovies });
            }
        }
    };

    handleHeartClick = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);

        movies[index] = { ...movies[index] };
        movies[index].isHearted = !movies[index].isHearted;

        this.setState({ movies });
    };

    handlePaginationClick = page => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genreId => {
        this.setState({
            selectedGenreId: genreId,
            currentPage: 1,
            isSearching: false,
            searchString: "",
        });
    };

    handleSort = newSortFiled => {
        this.setState({ sortFiled: newSortFiled });
    };

    handleSearch = (searchString, isSearching) => {
        this.setState({
            searchString,
            isSearching,
            selectedGenreId: null,
            currentPage: 1,
        });
    };

    render = () => {
        const {
            pageSize,
            currentPage,
            genres,
            selectedGenreId,
            sortFiled,
            searchString,
        } = this.state;
        let { movies } = this.state;

        // if (movies.length === 0) return <p>There are no movies in database</p>;

        movies = this.filter(movies);
        const lengthBeforePaginate = movies.length;

        movies = this.sortingMovies(movies);
        movies = movieService.paginate(movies, currentPage, pageSize);

        const isLogin = authService.getToken() ? true : false;

        return (
            <div className="row" style={{ marginTop: 40 }}>
                <div className="col-3">
                    <GenreList
                        genres={genres}
                        selectedGenreId={selectedGenreId}
                        onGenreSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    {isLogin && (
                        <div className="mb-3">
                            <Link className="btn btn-primary" to="/movies/new">
                                Add new Movie
                            </Link>
                        </div>
                    )}

                    <p>Showing {lengthBeforePaginate} in the database</p>

                    <SearchBox onSearch={this.handleSearch} searchString={searchString} />

                    <MoviesTable
                        movies={movies}
                        genres={genres}
                        onHeartClick={this.handleHeartClick}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        sortFiled={sortFiled}
                        isLogin={isLogin}
                    />
                    <Pagination
                        itemsCount={lengthBeforePaginate}
                        pageSize={pageSize}
                        onClick={this.handlePaginationClick}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    };
}
