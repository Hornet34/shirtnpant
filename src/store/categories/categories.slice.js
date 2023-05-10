import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    categoriesData: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: InitialState,
    reducers: {
        successFetchingCategories(state, action) {
            state.categoriesData = action.payload;
            state.isLoading = false;
        },
        failedFetchingCategories(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        startFetchingCategories(state, action) {
            state.isLoading = true;
        }
    }
})

export const { startFetchingCategories, failedFetchingCategories, successFetchingCategories } = categoriesSlice.actions;

export const CategoriesReducer = categoriesSlice.reducer;