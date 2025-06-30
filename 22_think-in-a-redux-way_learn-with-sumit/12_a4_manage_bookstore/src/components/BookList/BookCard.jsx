import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Stars from "./Stars";

const BookCard = ({ book }) => {
    const { name, author, thumbnail, price, rating, featured, id } = book;

    return (
        <div className="book-card">
            <img
                className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
                src={thumbnail}
                alt="book"
            />
            <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
                <div className="flex items-center justify-between">
                    {featured && (
                        <span className="badge-success lws-Badge">featured</span>
                    )}
                    <div className="text-gray-500 space-x-2">
                        <EditButton bookId={id} />
                        <DeleteButton bookId={id} />
                    </div>
                </div>
                <div className="space-y-2 mt-4 h-full">
                    <h4 className="lws-bookName">{name}</h4>
                    <p className="lws-author">{author}</p>
                    <Stars rating={rating} />
                    <p className="lws-price">BDT {price}</p>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default BookCard;
