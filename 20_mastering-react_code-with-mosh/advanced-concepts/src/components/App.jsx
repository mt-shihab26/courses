import { Component } from "react";
import MoviePage from "./movies/MoviePage.jsx";
import UserContext from "../contexts/userContext.js";
import Login from "./movies/Login.jsx";
import CartContext from "../contexts/cartContext.js";

class App extends Component {
    state = { user: { name: "" } };

    setUser = user => {
        this.setState({ user });
    };
    setCart = () => {};

    render = () => {
        return (
            <CartContext.Provider value={{ cart: [], setCart: this.setCart }}>
                <UserContext.Provider
                    value={{ user: this.state.user, setUser: this.setUser }}
                >
                    <MoviePage />
                    <Login />
                </UserContext.Provider>
            </CartContext.Provider>
        );
    };
}
export default App;
