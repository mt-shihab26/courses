import { useSelector } from "react-redux";
import logoImage from "../assets/images/logo.png";

const Navbar = ({ setCurrentPage }) => {
    const cart = useSelector(state => state.cart);

    const totalProductInCart = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

    const handleSetCurrentPage = page => {
        setCurrentPage(page);
    };

    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a onClick={() => handleSetCurrentPage("products")}>
                    <img src={logoImage} alt="LWS" className="max-w-[140px]" />
                </a>
                <div className="flex gap-4">
                    <a
                        onClick={() => handleSetCurrentPage("products")}
                        className="navHome"
                        id="lws-home"
                        style={{ cursor: "pointer" }}
                    >
                        Home
                    </a>
                    <a
                        onClick={() => handleSetCurrentPage("cart")}
                        className="navCart"
                        id="lws-cart"
                        style={{ cursor: "pointer" }}
                    >
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
                        <span id="lws-totalCart">{totalProductInCart}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
