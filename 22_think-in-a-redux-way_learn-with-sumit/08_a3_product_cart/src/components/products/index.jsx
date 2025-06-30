import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import Product from "./Product";

const Products = () => {
    const products = useSelector(state => state.products);

    return (
        <div className="productWrapper">
            <div className="productContainer" id="lws-productContainer">
                {products.length === 0
                    ? "No Product Found"
                    : products.map(product => <Product key={product.id} product={product} />)}
            </div>

            <div>
                <AddProduct />
            </div>
        </div>
    );
};

export default Products;
