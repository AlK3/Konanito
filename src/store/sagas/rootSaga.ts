import { all } from '@redux-saga/core/effects';
import { watchLoadTopData } from './loadTopDataSaga';
import { watchLoadTitleData } from './loadTitleDataSaga';
import { watchLoadSearchData } from './loadSearchDataSaga';
import { watchLoadTranslateData } from './loadTranslateDataSaga';
import { watchLoadReviewsData } from './loadReviewsDataSaga';
import { watchLoadRecommendationsData } from './loadRecommendationsDataSaga';
import { watchLoadEpisodesData } from './loadEpisodesDataSaga';

export function* rootSaga() {
  yield all([
    watchLoadTopData(),
    watchLoadTitleData(),
    watchLoadSearchData(),
    watchLoadReviewsData(),
    watchLoadEpisodesData(),
    watchLoadTranslateData(),
    watchLoadRecommendationsData(),
  ]);
}