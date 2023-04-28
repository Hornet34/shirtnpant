import { createSelector } from "reselect";

const selectReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector([selectReducer], (cart) => cart.isCartOpen);

export const selectCartItems = createSelector([selectReducer], (cart) => cart.cartItems);

export const selectCartQuantity = createSelector([selectCartItems], (cartItems) => {
    const quantity = cartItems.reduce((accumulator, currentElement) => accumulator + currentElement.quantity, 0);
    return quantity;
})

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
    const total = cartItems.reduce((accumulator, currentElement) => accumulator + (currentElement.quantity * currentElement.price), 0);
    return total;
})
