import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchString } from "../../features/filter/filterSlice";
import logoSVG from "./../../assets/logo.svg";

const Navbar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setSearchString(search));
    };

    return (
        <nav className="container relative py-3">
            <div className="flex items-center justify-between">
                <a href="/">
                    <img src={logoSVG} />
                </a>
                {/* There are nothing to do with the search in add or edit task page, but kept for looking good */}
                <form
                    onSubmit={handleSubmit}
                    className="flex-1 max-w-xs search-field group"
                >
                    <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search Job"
                        className="search-input"
                        style={{ color: "black" }}
                        id="lws-searchJob"
                    />
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
