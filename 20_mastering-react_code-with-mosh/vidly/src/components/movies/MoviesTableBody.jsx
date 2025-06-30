import { Link } from "react-router-dom";
import * as authService from "../../service/authService.js";
import HeartIcon from "../common/HeartIcon.jsx";

const MoviesTableBody = ({ movies, onHeartClick, onDelete, genres }) => {
    const getGenreName = movie => genres.find(g => g._id === movie.genreId).name;
    const token = authService.getToken();
    const isLogin = token ? true : false;
    const isLoginAndAdmin = !token
        ? false
        : authService.decodeToken().isAdmin == true
        ? true
        : false;
    return (
        <tbody>
            {movies.map(movie => (
                <tr key={movie._id}>
                    {isLogin ? (
                        <th>
                            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                        </th>
                    ) : (
                        <th>{movie.title}</th>
                    )}
                    <th>{getGenreName(movie)}</th>
                    <th>{movie.numberInStock}</th>
                    <th>{movie.dailyRentalRate}</th>
                    <th>
                        <HeartIcon
                            hearted={!movie.isHearted}
                            onClick={() => onHeartClick(movie)}
                        />
                    </th>
                    {isLoginAndAdmin && (
                        <th>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(movie._id)}
                            >
                                Delete
                            </button>
                        </th>
                    )}
                </tr>
            ))}
        </tbody>
    );
};

export default MoviesTableBody;
