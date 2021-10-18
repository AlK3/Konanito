import * as Eff from 'redux-saga/effects';
import { call, put } from '@redux-saga/core/effects';
import { Action } from '../../enums';
import { updateTitleData, updateTranslateData } from '../reducers/dataReducer';
import { setTranslate } from '../reducers/translateReducer';

const takeEvery: any = Eff.takeEvery;

interface ILoadTitleDataProps {
  id: string;
}

function fetchTopData(id: string) {
  return fetch(`https://api.jikan.moe/v3/anime/${id}`)
    .then(response => response.json());
}

function* workerLoadTitleData({ id }: ILoadTitleDataProps): Generator {
  yield put(setTranslate(false));
  yield put(updateTranslateData(''));
  const titleData = yield call(fetchTopData, id);
  yield put(updateTitleData(titleData));
}

export function* watchLoadTitleData() {
  yield takeEvery(Action.LOAD_TITLE_DATA, workerLoadTitleData);
}