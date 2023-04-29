import { createSelector } from "reselect";

const selectReducer = (state) => state.categories;

const selectCategoriesDataObject = createSelector([selectReducer],
    (categoriesReducer) => categoriesReducer.categoriesData)

export const selectCategoriesData = createSelector([selectCategoriesDataObject],
    (categoriesData) => categoriesData)

export const selectCategoriesIsLoading = createSelector([selectReducer],
    (categoriesReducer) => categoriesReducer.isLoading);