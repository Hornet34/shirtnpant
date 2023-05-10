import { createSlice } from "@reduxjs/toolkit";

const addItem = (cartItems, productToAdd) => {
    const items = [...cartItems];
    for (let item of items) {
        if (item.id === productToAdd.id) {
            item.quantity++;
            return items;
        }
    }
    items.push({ ...productToAdd, quantity: 1 });
    return items;
}

const deleteItem = (cartItems, productToDelete) => {
    let items = [...cartItems];
    return items.filter(item => item.id !== productToDelete.id);
}

const subItem = (cartItems, productToRemove) => {
    let items = [...cartItems];
    for (let item of items) {
        if (item.id === productToRemove.id) {
            if (productToRemove.quantity > 1) {
                item.quantity--;
                return items;
            }
            else return deleteItem(items, productToRemove)
        }
    }
}

const IntitalState = {
    isCartOpen: false,
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: IntitalState,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addItem(state.cartItems, action.payload)
        },
        subItemFromCart(state, action) {
            state.cartItems = subItem(state.cartItems, action.payload)
        },
        deleteItemFromCart(state, action) {
            state.cartItems = deleteItem(state.cartItems, action.payload)
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        }
    }
})

export const { addItemToCart, subItemFromCart, deleteItemFromCart, setIsCartOpen } = cartSlice.actions;
export const CartReducer = cartSlice.reducer;