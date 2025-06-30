import { ADDED, DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY } from "./productsActionsType";
import productInitialState from "./productsInitialState";

const nextProductId = products => {
    const maxId = products.reduce((maxId, product) => Math.max(maxId, product.id), 0);
    return maxId + 1;
};

const productsReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case ADDED:
            return [...state, { ...action.payload, id: nextProductId(state) }];
        case DECREASE_PRODUCT_QUANTITY:
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: product.quantity - action.payload.value };
                }
                return product;
            });
        case INCREASE_PRODUCT_QUANTITY:
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: product.quantity + action.payload.value };
                }
                return product;
            });
        default:
            return state;
    }
};

export default productsReducer;
