import * as Eff from 'redux-saga/effects';
import { call, put } from '@redux-saga/core/effects';
import { Action } from '../../enums';
import { updateRecommendationsData } from '../reducers/dataReducer';

const takeEvery: any = Eff.takeEvery;

interface ILoadRecommendationsDataProps {
  titleId: string;
}

function fetchRecommendationsData(titleId: string) {
  return fetch(`https://api.jikan.moe/v3/anime/${titleId}/recommendations`)
    .then(response => response.json());
}

function* workerLoadRecommendationsData({ titleId }: ILoadRecommendationsDataProps): Generator {
  const reviewsData = yield call(fetchRecommendationsData, titleId);
  yield put(updateRecommendationsData(reviewsData));
}

export function* watchLoadRecommendationsData() {
  yield takeEvery(Action.LOAD_RECOMMENDATION_DATA, workerLoadRecommendationsData);
}