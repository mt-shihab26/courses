import PropTypes from "prop-types";

const Filters = ({ setFilter, filter }) => {
    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={() => setFilter("all")}
                className={`filter-btn ${filter === "all" ? "active-filter" : ""}`}
                id="lws-filterAll"
            >
                All
            </button>
            <button
                onClick={() => setFilter("featured")}
                className={`filter-btn ${filter === "featured" ? "active-filter" : ""}`}
                id="lws-filterFeatured"
            >
                Featured
            </button>
        </div>
    );
};

Filters.propTypes = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default Filters;
