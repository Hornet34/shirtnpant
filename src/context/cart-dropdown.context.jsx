import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    visible: null,
    setVisible: () => null
})

export const CartDropdownProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const value = { visible, setVisible };
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    );
}