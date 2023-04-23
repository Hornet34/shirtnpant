import { createContext, useEffect, useState } from "react";


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



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartQuantity: 0,
    subItemFromCart: () => null,
    deleteItemFromCart: () => null,
    totalPrice: () => null
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);

    useEffect(() => {
        let quantity = cartItems.reduce((accumulator, currentElement) => accumulator + currentElement.quantity, 0);
        setCartQuantity(quantity);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        const items = addItem(cartItems, productToAdd);
        setCartItems(items);
    }

    const subItemFromCart = (productToSub) => {
        const items = subItem(cartItems, productToSub);
        setCartItems(items);
    }

    const deleteItemFromCart = (productToDelete) => {
        const items = deleteItem(cartItems, productToDelete);
        setCartItems(items);
    }

    const totalPrice = () => {
        let total = cartItems.reduce((accumulator, currentElement) => accumulator + (currentElement.quantity * currentElement.price), 0);
        return total;

    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartQuantity, subItemFromCart, deleteItemFromCart, totalPrice };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}