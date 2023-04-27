import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesData } from "../../utilities/firebase/firebase.js";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { setCategories } from "../../store/categories/categories.action.js";


const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesDatafromdb = async () => {
            const categoriesData = await getCategoriesData();
            dispatch(setCategories(categoriesData));

        }
        getCategoriesDatafromdb();
    })
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );

}

export default Shop;