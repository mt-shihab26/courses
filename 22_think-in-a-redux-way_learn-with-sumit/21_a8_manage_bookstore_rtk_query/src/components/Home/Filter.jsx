import { useDispatch } from "react-redux";
import { setFilterBy } from "../../features/filter/filterSlice";

const Filter = ({ filterBy }) => {
    const dispatch = useDispatch();

    const handleFilterSet = name => {
        dispatch(setFilterBy(name));
    };

    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => handleFilterSet("all")}
                    className={`lws-filter-btn ${
                        filterBy === "all" ? "active-filter" : ""
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilterSet("featured")}
                    className={`lws-filter-btn ${
                        filterBy === "featured" ? "active-filter" : ""
                    }`}
                >
                    Featured
                </button>
            </div>
        </div>
    );
};

export default Filter;
