import { createContext, useState } from "react";


const additem = (cartItems, productToAdd) => {
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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartQuantity: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);

    const addItemToCart = (productToAdd) => {
        const items = additem(cartItems, productToAdd);
        setCartItems(items);
        let q = items.reduce((accumulator, currentElement) => accumulator + currentElement.quantity, 0);
        setCartQuantity(q);
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartQuantity };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}