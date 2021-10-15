import { all } from '@redux-saga/core/effects';
import { watchLoadTopData } from './loadTopDataSaga';
import { watchLoadTitleData } from './loadTitleDataSaga';
import { watchLoadSearchData } from './loadSearchDataSaga';
import { watchLoadTranslateData } from './loadTranslateDataSaga';

export function* rootSaga() {
  yield all([
    watchLoadTopData(),
    watchLoadTitleData(),
    watchLoadSearchData(),
    watchLoadTranslateData(),
  ]);
}