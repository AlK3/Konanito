import * as Eff from 'redux-saga/effects';
import { call, put } from '@redux-saga/core/effects';
import { Action } from '../../enums';
import { updateEpisodesData } from '../reducers/dataReducer';

const takeEvery: any = Eff.takeEvery;

interface ILoadEpisodesDataProps {
  titleId: string;
}

function fetchEpisodesData(titleId: string) {
  return fetch(`https://api.jikan.moe/v3/anime/${titleId}/episodes`)
    .then(response => response.json());
}

function* workerLoadEpisodesData({ titleId }: ILoadEpisodesDataProps): Generator {
  const reviewsData = yield call(fetchEpisodesData, titleId);
  yield put(updateEpisodesData(reviewsData));
}

export function* watchLoadEpisodesData() {
  yield takeEvery(Action.LOAD_EPISODES_DATA, workerLoadEpisodesData);
}