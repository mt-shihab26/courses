import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteCartItem, increaseQuantity } from "../../redux/cart/cartActions";
import {
    decreaseProductQuantity,
    increaseProductQuantity,
} from "../../redux/products/productsActions";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const { id, productId, quantity, price } = cartItem;
    const product = useSelector(state => state.products).find(item => item.id === productId);
    const { name, category, imageUrl, quantity: productQuantity } = product;

    const totalPrice = price * quantity;

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(id));
        dispatch(increaseProductQuantity(productId));
    };

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(id));
        dispatch(decreaseProductQuantity(productId));
    };

    const handleDeleteCart = () => {
        dispatch(deleteCartItem(id));
        dispatch(increaseProductQuantity(productId, quantity));
    };

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* cart image */}
                <img className="lws-cartImage" src={imageUrl} alt="product" />
                {/* cart item info */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{name}</h4>
                    <p className="lws-cartCategory">{category}</p>
                    <p>
                        BDT <span className="lws-cartPrice">{price}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* amount buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleIncreaseQuantity}
                        disabled={productQuantity === 0}
                        className="lws-incrementQuantity"
                    >
                        <i className="text-lg fa-solid fa-plus" />
                    </button>
                    <span className="lws-cartQuantity">{quantity}</span>
                    <button
                        disabled={quantity === 1}
                        onClick={handleDecreaseQuantity}
                        className="lws-decrementQuantity"
                    >
                        <i className="text-lg fa-solid fa-minus" />
                    </button>
                </div>
                {/* price */}
                <p className="text-lg font-bold">
                    BDT <span className="lws-calculatedPrice">{totalPrice}</span>
                </p>
            </div>
            {/* delete button */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button onClick={handleDeleteCart} className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
