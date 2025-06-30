import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { setSearchString } from "../../features/filter/filterSlice";
import searchSVG from "./../../assets/search.svg";

const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMatch = useMatch("/");

    const { searchString } = useAppSelector(state => state.filter);

    const [input, setInput] = useState(searchString);

    const handleSubmit = () => {
        dispatch(setSearchString(input));
        if (!isMatch) {
            navigate("/");
        }
    };

    return (
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={e => setInput(e.target.value)}
                />
            </form>
            <img className="inline h-4 cursor-pointer" src={searchSVG} alt="Search" />
        </div>
    );
};

export default SearchBar;
