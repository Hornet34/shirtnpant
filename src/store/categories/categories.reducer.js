import { CategoriesActionTypes } from "./categories.types";

const InitialState = {
    categoriesData: [],
    error: null,
    isLoading: false
}

export const CategoriesReducer = (state = InitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CategoriesActionTypes.Fetch_Categories_Success:
            return { ...state, categoriesData: payload, isLoading: false };
        case CategoriesActionTypes.Fetch_Categories_Failed:
            return { ...state, error: payload, isLoading: false };
        case CategoriesActionTypes.Fetch_Categories_Start:
            return { ...state, isLoading: true };

        default:
            return state;
    }
}