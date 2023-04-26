import { createContext, useEffect, useReducer } from "react";


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

const CartActionTypes = {
    Is_Cart_Open: 'Is_Cart_Open',
    Cart_Items: 'Cart_Items',
    Cart_Quantity: 'Cart_Quantity'
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.Is_Cart_Open:
            return {
                ...state, isCartOpen: payload
            };
        case CartActionTypes.Cart_Items:
            return {
                ...state, cartItems: payload
            };
        case CartActionTypes.Cart_Quantity:
            return {
                ...state, cartQuantity: payload
            };
        default:
            throw new Error(`Unhandled ${type} in CartReducer`);
    }
}

const IntitalState = {
    isCartOpen: false,
    cartItems: [],
    cartQuantity: []
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, IntitalState);

    const { isCartOpen, cartItems, cartQuantity } = state;

    const setIsCartOpen = (cartStatus) => {
        dispatch({ type: CartActionTypes.Is_Cart_Open, payload: cartStatus })
    }
    const setCartItems = (Items) => {
        dispatch({ type: CartActionTypes.Cart_Items, payload: Items })
    }
    const setCartQuantity = (Quantity) => {
        dispatch({ type: CartActionTypes.Cart_Quantity, payload: Quantity })
    }

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