import BookCard from "./BookCard";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Filter from "./Filter";
import { useSelector } from "react-redux";

const filterBySearchString = (books, searchString) => {
    if (searchString === "") {
        return books;
    }
    return books.filter(book =>
        book.name.toLowerCase().includes(searchString.toLowerCase())
    );
};

const filterByFilters = (books, filterBy) => {
    if (filterBy === "featured") {
        return books.filter(book => book.featured);
    }
    return books;
};

const Home = () => {
    const { data: books, isLoading, isError, error } = useGetBooksQuery();
    const { filterBy, searchString } = useSelector(state => state.filter);

    let filterdBooks = filterByFilters(books, filterBy);
    filterdBooks = filterBySearchString(filterdBooks, searchString);

    return (
        <main className="py-12 px-6 2xl:px-6 container">
            <div className="order-2 xl:-order-1">
                <Filter filterBy={filterBy} />
                <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <>
                        {isLoading ? (
                            <>Loading...</>
                        ) : isError ? (
                            <>{error?.message}</>
                        ) : books.length === 0 ? (
                            <>There is no books :)</>
                        ) : (
                            <>
                                {filterdBooks.map(book => (
                                    <BookCard key={book.id} book={book} />
                                ))}
                            </>
                        )}
                    </>
                </div>
            </div>
        </main>
    );
};

export default Home;
