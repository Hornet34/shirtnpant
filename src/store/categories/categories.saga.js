import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CategoriesActionTypes } from './categories.types';
import { getCategoriesData } from "../../utilities/firebase/firebase";
import { successFetchingCategories, failedFetchingCategories } from './categories.action';

export function* fetchingCategoriesAsync() {

    try {
        const categoriesData = yield call(getCategoriesData);
        yield put(successFetchingCategories(categoriesData));
    }
    catch (error) {
        yield put(failedFetchingCategories(error));
    }
}


function* onFetching() {
    yield takeLatest(CategoriesActionTypes.Fetch_Categories_Start, fetchingCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetching)]);
}