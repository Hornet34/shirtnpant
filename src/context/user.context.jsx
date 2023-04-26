import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListner } from "../utilities/firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

const UserActionTypes = {
    Set_Current_User: 'Set_Current_User',
}

const UserReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionTypes.Set_Current_User:
            return {
                ...state, currentUser: payload
            };
        default:
            throw new Error(`unhandled type ${type} in userReducer`);
    }
}

const IntitalState = {
    currentUser: null
}


export const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, IntitalState);
    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch({ type: UserActionTypes.Set_Current_User, payload: user });
    }
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}