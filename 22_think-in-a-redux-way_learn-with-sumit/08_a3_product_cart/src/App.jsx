import { useState } from "react";
import { Provider } from "react-redux";
import Cart from "./components/cart";
import Navbar from "./components/Navbar";
import Products from "./components/products";
import store from "./redux/store";

const App = () => {
    const [currentPage, setCurrentPage] = useState("products");

    return (
        <Provider store={store}>
            <Navbar setCurrentPage={setCurrentPage} />
            <main className="py-16">
                {currentPage === "products" && <Products />}
                {currentPage === "cart" && <Cart />}
            </main>
        </Provider>
    );
};

export default App;
