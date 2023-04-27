import { CategoriesActionTypes } from "./categories.types";

const InitialState = {
    categoriesData: []
}

export const CategoriesReducer = (state = InitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CategoriesActionTypes.Set_Categories_Data:
            return { ...state, categoriesData: payload };
        default:
            return state;
    }
}