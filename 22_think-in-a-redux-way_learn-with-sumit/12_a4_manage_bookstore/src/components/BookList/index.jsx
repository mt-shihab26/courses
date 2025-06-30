import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/booksThunks";
import BookCard from "./BookCard";
import Filters from "./Filters";

const filterBySearchString = (books, searchString) => {
    if (searchString === "") {
        return books;
    }
    return books.filter(book =>
        book.name.toLowerCase().includes(searchString.toLowerCase())
    );
};

const filterByFilters = (books, filter) => {
    if (filter === "featured") {
        return books.filter(book => book.featured);
    }
    return books;
};

const BookList = () => {
    const dispatch = useDispatch();

    const [filter, setFilter] = useState("all");

    const books = useSelector(state => state.books);
    const search = useSelector(state => state.search);

    const { searchString } = search;

    const searchedBooks = filterBySearchString(books, searchString);
    const filteredBooks = filterByFilters(searchedBooks, filter);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>
                <Filters setFilter={setFilter} filter={filter} />
            </div>
            <div className="lws-bookContainer">
                {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;
