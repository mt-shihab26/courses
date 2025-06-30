import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../features/filter/filterSlice";

const options = [
    { name: "", label: "Default" },
    { name: "newest", label: "Newest" },
    { name: "most_liked", label: "Most Liked" },
];

const SidebarSort = () => {
    const dispatch = useDispatch();

    const { sortType } = useSelector(state => state.filter);

    const handleChange = e => {
        dispatch(setSortType(e.target.value));
    };

    return (
        <div className="sidebar-content">
            <h4>Sort</h4>
            <select
                value={sortType}
                onChange={handleChange}
                name="sort"
                id="lws-sort"
                className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.name}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SidebarSort;
