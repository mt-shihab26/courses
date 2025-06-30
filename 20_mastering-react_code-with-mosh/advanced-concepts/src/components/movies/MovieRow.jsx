import { useContext } from "react";
import CartContext from "../../contexts/cartContext.js";
import UserContext from "../../contexts/userContext.js";

const MovieRow = () => {
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);

    console.log("userContext ", userContext);
    console.log("cartContext ", cartContext);

    return <div>Movie Row {userContext.user.name}</div>;
};

export default MovieRow;
