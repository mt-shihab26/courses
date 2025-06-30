import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchString } from "../../features/filter/filterSlice";

const SearchBar = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const handleSubmit = () => {
        dispatch(setSearchString(search));
    };

    return (
        <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
            <form
                onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search Job"
                    className="search-input"
                    id="lws-searchJob"
                />
            </form>
        </div>
    );
};

export default SearchBar;
