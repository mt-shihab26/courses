import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import { decreaseProductQuantity } from "../../redux/products/productsActions";

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const { id, name, category, imageUrl, price, quantity } = product;

    const handleAddToCart = () => {
        dispatch(addToCart(id, price));
        dispatch(decreaseProductQuantity(id));
    };

    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={imageUrl} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{name}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                        BDT <span className="lws-price">{price}</span>
                    </p>
                    <p className="productQuantity">
                        QTY <span className="lws-quantity">{quantity}</span>
                    </p>
                </div>
                <button
                    onClick={handleAddToCart}
                    disabled={quantity === 0}
                    className="lws-btnAddToCart"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
