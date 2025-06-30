import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    DELETE_CART_ITEM,
    INCREASE_QUANTITY,
} from "./cartActionsType";
import cartInitialState from "./cartInitialState";

const nextCartId = cart => {
    const maxId = cart.reduce((maxId, cartItem) => Math.max(maxId, cartItem.id), 0);
    return maxId + 1;
};

const isProductExist = (cart, productId) => {
    return cart.filter(cartItem => cartItem.productId === productId).length === 1;
};

const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId, price } = action.payload;
            if (isProductExist(state, productId)) {
                return state.map(cartItem => {
                    if (cartItem.productId === productId) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                });
            }
            return [
                ...state,
                {
                    id: nextCartId(state),
                    quantity: 1,
                    productId,
                    price,
                },
            ];
        case INCREASE_QUANTITY:
            return state.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
        case DECREASE_QUANTITY:
            return state.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            });
        case DELETE_CART_ITEM:
            return state.filter(cartItem => cartItem.id !== action.payload);
        default:
            return state;
    }
};

export default cartReducer;
