import { useDispatch, useSelector } from "react-redux";
import { setFilterType } from "../../features/filter/filterSlice";

const SidebarFilter = () => {
    const dispatch = useDispatch();

    const { filterType } = useSelector(state => state.filter);

    const handleClick = filterType => {
        dispatch(setFilterType(filterType));
    };

    return (
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
                <div onChange={() => handleClick("all")}>
                    <input
                        checked={filterType === "all"}
                        type="radio"
                        name="filter"
                        id="lws-all"
                        className="radio"
                    />
                    <label htmlFor="lws-all">All</label>
                </div>
                <div onChange={() => handleClick("saved")}>
                    <input
                        checked={filterType == "saved"}
                        type="radio"
                        name="filter"
                        id="lws-saved"
                        className="radio"
                    />
                    <label htmlFor="lws-saved">Saved</label>
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;
