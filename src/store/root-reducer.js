import { combineReducers } from "@reduxjs/toolkit";

import { UserReducer } from "./user/user.slice";
import { CategoriesReducer } from "./categories/categories.slice";
import { CartReducer } from "./cart/cart.slice";

export const rootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer,
    cart: CartReducer
})