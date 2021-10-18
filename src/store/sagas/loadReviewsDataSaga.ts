import * as Eff from 'redux-saga/effects';
import { call, put } from '@redux-saga/core/effects';
import { Action } from '../../enums';
import { updateReviewsData } from '../reducers/dataReducer';

const takeEvery: any = Eff.takeEvery;

interface ILoadReviewsDataProps {
  page: number;
  titleId: string;
}

function fetchReviewsData(page: number, titleId: string) {
  return fetch(`https://api.jikan.moe/v3/anime/${titleId}/reviews/${page}`)
    .then(response => response.json());
}

function* workerLoadReviewsData({ page, titleId }: ILoadReviewsDataProps): Generator {
  const reviewsData = yield call(fetchReviewsData, page, titleId);
  yield put(updateReviewsData(reviewsData));
}

export function* watchLoadReviewsData() {
  yield takeEvery(Action.LOAD_REVIEWS_DATA, workerLoadReviewsData);
}