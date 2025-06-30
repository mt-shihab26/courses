import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    DELETE_CART_ITEM,
    INCREASE_QUANTITY,
} from "./cartActionsType";

export const addToCart = (productId, price) => {
    return {
        type: ADD_TO_CART,
        payload: {
            productId,
            price,
        },
    };
};

export const increaseQuantity = cartItemId => {
    return {
        type: INCREASE_QUANTITY,
        payload: cartItemId,
    };
};

export const decreaseQuantity = cartItemId => {
    return {
        type: DECREASE_QUANTITY,
        payload: cartItemId,
    };
};

export const deleteCartItem = cartItemId => {
    return {
        type: DELETE_CART_ITEM,
        payload: cartItemId,
    };
};
