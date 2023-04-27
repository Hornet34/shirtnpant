import { CategoriesActionTypes } from "./categories.types";
import { createAction } from '../../utilities/reducer/reducer';

export const setCategories = (categories) => createAction(CategoriesActionTypes.Set_Categories_Data, categories)