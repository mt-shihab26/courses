import PropTypes from "prop-types";

const MoviesTableHeader = ({ onSort, sortFiled, columns }) => {
    const raiseSort = (filed) => {
        const order =
            sortFiled.filed === filed
                ? sortFiled.order === "asc"
                    ? "dsc"
                    : "asc"
                : "asc";
        const newSortFiled = { filed: filed, order: order };
        onSort(newSortFiled);
    };

    const sortIcon = (column) => {
        if (sortFiled.filed !== column.path) return null;
        if (sortFiled.order === "asc") return <i className="fa fa-sort-asc" />;
        return <i className="fa fa-sort-desc" />;
    };

    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th
                        className="clickable"
                        key={index}
                        onClick={() => raiseSort(column.path)}
                    >
                        {column.label} {sortIcon(column)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

MoviesTableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    sortFiled: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
};

export default MoviesTableHeader;
