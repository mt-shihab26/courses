import { ADDED, DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY } from "./productsActionsType";

export const added = (name, category, imageUrl, price, quantity) => {
    return {
        type: ADDED,
        payload: {
            name,
            category,
            imageUrl,
            price,
            quantity,
        },
    };
};

export const decreaseProductQuantity = (productId, value = 1) => {
    return {
        type: DECREASE_PRODUCT_QUANTITY,
        payload: {
            id: productId,
            value,
        },
    };
};

export const increaseProductQuantity = (productId, value = 1) => {
    return {
        type: INCREASE_PRODUCT_QUANTITY,
        payload: {
            id: productId,
            value,
        },
    };
};
