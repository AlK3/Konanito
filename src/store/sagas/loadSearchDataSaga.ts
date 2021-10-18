import * as Eff from 'redux-saga/effects';
import { call, put } from "@redux-saga/core/effects";
import { Action } from '../../enums';
import { updateSearchData } from '../reducers/dataReducer';

const takeEvery: any = Eff.takeEvery;

interface ISearchSagaProps {
  request: string;
}

function fetchSearch(request: string) {
  return fetch(`https://api.jikan.moe/v3/search/anime?${request}`).then(response => response.json());
}

function* workerLoadSearchData({request}: ISearchSagaProps): Generator {
  const data = yield call(fetchSearch, request);
  yield put(updateSearchData(data));
}

export function* watchLoadSearchData() {
  yield takeEvery(Action.LOAD_SEARCH_DATA, workerLoadSearchData);
}