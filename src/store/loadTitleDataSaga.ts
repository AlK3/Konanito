import * as Eff from 'redux-saga/effects';
import { call, put } from '@redux-saga/core/effects';
import { Action } from '../consts';
import { updateTitleData } from './dataReducer';

const takeEvery: any = Eff.takeEvery;

interface ILoadTitleDataProps {
  id: string;
}

function fetchTopData(id: string) {
  return fetch(`https://api.jikan.moe/v3/anime/${id}`)
    .then(response => response.json());
}

function* workerLoadTitleData({ id }: ILoadTitleDataProps): Generator {
  const titleData = yield call(fetchTopData, id);
  yield put(updateTitleData(titleData));
}

export function* watchLoadTitleData() {
  yield takeEvery(Action.LOAD_TOP_DATA, workerLoadTitleData);
}