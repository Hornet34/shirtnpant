import { CategoriesActionTypes } from "./categories.types";
import { createAction } from '../../utilities/reducer/reducer';


export const startFetchingCategories = () => {
    return createAction(CategoriesActionTypes.Fetch_Categories_Start);
}

export const successFetchingCategories = (categoriesData) => {
    return createAction(CategoriesActionTypes.Fetch_Categories_Success, categoriesData);
}

export const failedFetchingCategories = (error) => {
    return createAction(CategoriesActionTypes.Fetch_Categories_Failed, error);
}



