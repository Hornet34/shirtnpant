import { createContext, useState, useEffect } from "react";
import { getCategoriesData } from "../utilities/firebase/firebase.js";

export const CategoriesContext = createContext({
    categories: []
});

export const CategoriesProvider = ({ children }) => {
    useEffect(() => {
        const getCategoriesDatafromdb = async () => {
            const categoriesData = await getCategoriesData();
            setCategories(categoriesData);

        }
        getCategoriesDatafromdb();
    }, [])
    const [categories, setCategories] = useState([]);
    const value = { categories };
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    );

}