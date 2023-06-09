import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { startFetchingCategories } from "../../store/categories/categories.slice.js";


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startFetchingCategories());
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );

}

export default Shop;