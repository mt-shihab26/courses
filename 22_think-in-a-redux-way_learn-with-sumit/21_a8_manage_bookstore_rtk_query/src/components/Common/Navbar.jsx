import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="py-4 2xl:px-6">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img src={logo} width="150px" className="object-contain" />
                </Link>
                <ul className="hidden md:flex items-center space-x-6">
                    <Link
                        className={`cursor-pointer ${
                            pathname === "/" ? "font-semibold" : ""
                        }`}
                        to="/"
                        id="lws-bookStore"
                    >
                        <li>Book Store</li>
                    </Link>
                    <Link
                        className={`cursor-pointer ${
                            pathname === "/add" ? "font-semibold" : ""
                        }`}
                        to="/add"
                        id="lws-addBook"
                    >
                        <li>Add Book</li>
                    </Link>
                </ul>
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
