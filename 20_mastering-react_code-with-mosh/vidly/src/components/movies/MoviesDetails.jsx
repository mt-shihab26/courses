const MoviesDetails = ({ match, history }) => {
    return (
        <div>
            <h1>Movies Details - id: {match.params.id}</h1>
            <button
                className="btn btn-primary"
                onClick={() => history.replace("/movies")}
            >
                Save
            </button>
        </div>
    );
};

export default MoviesDetails;
