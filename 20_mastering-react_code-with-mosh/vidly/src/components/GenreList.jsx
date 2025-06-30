const GenreList = ({ genres, selectedGenreId, onGenreSelect }) => {
    const addClasses = (a, b) => {
        return "clickable list-group-item" + (a === b ? " active" : "");
    };

    return (
        <div>
            <ul className="list-group">
                {genres.map((genre) => (
                    <li
                        className={addClasses(selectedGenreId, genre._id)}
                        key={genre._id}
                        onClick={() => onGenreSelect(genre._id)}
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;
