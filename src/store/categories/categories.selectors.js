import { createSelector } from "reselect";

const selectReducer = (state) => state.categories;

const selectCategoriesDataObject = createSelector([selectReducer], (categories) => categories.categoriesData)

export const selectCategoriesData = createSelector([selectCategoriesDataObject],
    (categoriesData) => categoriesData)