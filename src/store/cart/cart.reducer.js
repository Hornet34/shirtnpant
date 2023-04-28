import { CartActionTypes } from "./cart.types";

const IntitalState = {
    isCartOpen: false,
    cartItems: []
}

export const CartReducer = (state = IntitalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.Is_Cart_Open:
            return {
                ...state, isCartOpen: payload
            };
        case CartActionTypes.Cart_Items:
            return { ...state, cartItems: payload };
        default:
            return state;
    }
}

