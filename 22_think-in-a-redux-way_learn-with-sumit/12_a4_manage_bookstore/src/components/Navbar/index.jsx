import logoImage from "./../../assets/images/logo.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="py-4 2xl:px-6">
            <div className="container flex items-center justify-between">
                <img src={logoImage} width="150px" className="object-contain" />
                <ul className="hidden md:flex items-center space-x-6">
                    <li className="font-semibold cursor-pointer">Book Store</li>
                    <li className="cursor-pointer">Wishlist</li>
                    <li className="cursor-pointer">My Collection</li>
                </ul>
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
