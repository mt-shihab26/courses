import { useDispatch } from "react-redux";
import { setSortingOrder } from "../../features/filter/filterSlice";

const SortingBar = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(setSortingOrder(e.target.value));
    };

    return (
        <select
            onChange={handleChange}
            id="lws-sort"
            name="sort"
            autoComplete="sort"
            className="flex-1"
        >
            <option value="none">Default</option>
            <option value="asc">Salary (Low to High)</option>
            <option value="desc">Salary (High to Low)</option>
        </select>
    );
};

export default SortingBar;
