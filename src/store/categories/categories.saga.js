import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCategoriesData } from "../../utilities/firebase/firebase";
import { startFetchingCategories, successFetchingCategories, failedFetchingCategories } from './categories.slice';

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
    yield takeLatest(startFetchingCategories().type, fetchingCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetching)]);
}