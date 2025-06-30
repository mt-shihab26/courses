import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updateBook } from "../../redux/books/booksThunks";
import { setInputBookId } from "../../redux/input/inputActions";
import InputField from "./InputField";

const AddOrUpdateBook = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [featured, setFeatured] = useState(false);

    const input = useSelector(state => state.input);
    const books = useSelector(state => state.books);

    const { bookId } = input;
    const book = books.find(b => b.id === bookId);

    useEffect(() => {
        if (book) {
            const { name, author, thumbnail, price, rating, featured } = book;
            setName(name);
            setAuthor(author);
            setThumbnail(thumbnail);
            setPrice(price);
            setRating(rating);
            setFeatured(featured);
        }
    }, [book]);

    const handleSubmit = e => {
        e.preventDefault();

        const newOrUpdatedBook = {
            name,
            author,
            thumbnail,
            price: Number(price),
            rating: Number(rating),
            featured,
        };

        if (book) {
            dispatch(updateBook({ ...newOrUpdatedBook, id: bookId }));
            dispatch(setInputBookId(-1));
        } else {
            dispatch(addBook(newOrUpdatedBook));
        }

        setName("");
        setAuthor("");
        setThumbnail("");
        setPrice("");
        setRating("");
        setFeatured(false);
    };
    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form onSubmit={handleSubmit} className="book-form">
                    <InputField
                        label="Book Name"
                        value={name}
                        setFunc={setName}
                        className="text-input"
                        id="input-Bookname"
                        name="name"
                    />
                    <InputField
                        label="Author"
                        value={author}
                        setFunc={setAuthor}
                        className="text-input"
                        id="input-Bookauthor"
                        name="author"
                    />
                    <InputField
                        label="Image Url"
                        value={thumbnail}
                        setFunc={setThumbnail}
                        className="text-input"
                        id="input-Bookthumbnail"
                        name="thumbnail"
                    />
                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <InputField
                            label="Price"
                            value={price}
                            setFunc={setPrice}
                            className="text-input"
                            type="number"
                            id="input-Bookprice"
                            name="price"
                        />
                        <InputField
                            label="Rating"
                            value={rating}
                            setFunc={setRating}
                            className="text-input"
                            type="number"
                            id="input-Bookrating"
                            name="rating"
                            min={1}
                            max={5}
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            checked={featured}
                            onChange={e => setFeatured(e.target.checked)}
                            id="input-Bookfeatured"
                            type="checkbox"
                            name="featured"
                            className="w-4 h-4"
                        />
                        <label htmlFor="input-Bookfeatured" className="ml-2 text-sm">
                            This is a featured book
                        </label>
                    </div>
                    <button type="submit" className="submit" id="submit">
                        {book ? "Update Book" : "Add Book"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddOrUpdateBook;
