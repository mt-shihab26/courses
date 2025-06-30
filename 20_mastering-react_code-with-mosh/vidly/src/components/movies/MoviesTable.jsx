import MoviesTableBody from "./MoviesTableBody.jsx";
import MoviesTableHeader from "./MoviesTableHeader.jsx";

const MoviesTable = ({
    movies,
    onHeartClick,
    onDelete,
    onSort,
    sortFiled,
    genres,
    isLogin,
}) => {
    const columns = [
        { label: "Title", path: "title" },
        { label: "Genre", path: "genreId" },
        { label: "Stock", path: "numberInStock" },
        { label: "Rate", path: "dailyRentalRate" },
        { label: "Hearted", path: "isHearted" },
    ];

    return (
        <table className="table">
            <MoviesTableHeader onSort={onSort} sortFiled={sortFiled} columns={columns} />

            <MoviesTableBody
                movies={movies}
                genres={genres}
                onHeartClick={onHeartClick}
                onDelete={onDelete}
                columns={columns}
            />
        </table>
    );
};

export default MoviesTable;
