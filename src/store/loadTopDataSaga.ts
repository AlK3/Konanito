import * as Eff from 'redux-saga/effects';
import { call, put } from '@redux-saga/core/effects';
import { Action } from '../enums';
import { updateTopData } from './dataReducer';

const takeEvery: any = Eff.takeEvery;

interface ILoadTopDataProps {
  page: number;
}

function fetchTopData(page: number) {
  return fetch(`https://api.jikan.moe/v3/top/anime/${page}`)
    .then(response => response.json());
}

function* workerLoadTopData({ page }: ILoadTopDataProps): Generator {
  const topData = yield call(fetchTopData, page);
  yield put(updateTopData(topData));
}

export function* watchLoadTopData() {
  yield takeEvery(Action.LOAD_TOP_DATA, workerLoadTopData);
}