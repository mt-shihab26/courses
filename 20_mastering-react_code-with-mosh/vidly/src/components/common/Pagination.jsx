import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onClick, currentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;

    const pages = [...Array(pagesCount).keys()].map((i) => i + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            page === currentPage
                                ? "page-item active"
                                : "page-item "
                        }
                        key={page}
                    >
                        <a className="page-link" onClick={() => onClick(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default Pagination;
