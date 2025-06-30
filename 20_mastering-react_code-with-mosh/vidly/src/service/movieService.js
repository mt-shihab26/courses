export const paginate = (items, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const lastIndex =
        items.length <= startIndex + pageSize ? items.length : startIndex + pageSize;
    const newItems = [];

    for (let i = startIndex; i < lastIndex; i++) {
        newItems.push(items[i]);
    }
    return newItems;
};

export const filterMoviesByGenre = (movies, genreId) => {
    if (genreId === "1") return movies;
    return movies.filter(movie => movie.genreId === genreId);
};

export const filterBySearch = (movies, searchString) => {
    searchString = searchString.toLowerCase();
    return movies.filter(movie => movie.title.toLowerCase().startsWith(searchString));
};
