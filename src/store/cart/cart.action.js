import { createAction } from '../../utilities/reducer/reducer';
import { CartActionTypes } from './cart.types';


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


export const setIsCartOpen = (cartStatus) => createAction(CartActionTypes.Is_Cart_Open, cartStatus);


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addItem(cartItems, productToAdd);
    return createAction(CartActionTypes.Cart_Items, newCartItems);
}

export const subItemFromCart = (cartItems, productToSub) => {
    const newCartItems = subItem(cartItems, productToSub);
    return createAction(CartActionTypes.Cart_Items, newCartItems);
}

export const deleteItemFromCart = (cartItems, productToDelete) => {
    const newCartItems = deleteItem(cartItems, productToDelete);
    return createAction(CartActionTypes.Cart_Items, newCartItems);
}
