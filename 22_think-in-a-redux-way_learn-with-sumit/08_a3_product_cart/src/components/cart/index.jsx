import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

const Cart = () => {
    const cart = useSelector(state => state.cart);

    return (
        <div className="container 2xl:px-8 px-2 mx-auto">
            <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div className="cartListContainer">
                <div className="space-y-6">
                    {cart.length === 0
                        ? "No products in cart"
                        : cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
                </div>
                <BillDetails />
            </div>
        </div>
    );
};

export default Cart;
