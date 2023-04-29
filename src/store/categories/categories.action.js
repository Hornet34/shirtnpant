import { CategoriesActionTypes } from "./categories.types";
import { createAction } from '../../utilities/reducer/reducer';
import { getCategoriesData } from "../../utilities/firebase/firebase";


const startFetchingCategories = () => {
    return createAction(CategoriesActionTypes.Fetch_Categories_Start);
}

const successFetchingCategories = (categoriesData) => {
    return createAction(CategoriesActionTypes.Fetch_Categories_Success, categoriesData);
}

const failedFetchingCategories = (error) => {
    return createAction(CategoriesActionTypes.Fetch_Categories_Failed, error);
}

export const fetchingCategoriesAsync = () => async (dispatch) => {
    dispatch(startFetchingCategories());
    try {
        const categoriesData = await getCategoriesData();
        dispatch(successFetchingCategories(categoriesData));
    }
    catch (error) {
        dispatch(failedFetchingCategories(error));
    }
}

