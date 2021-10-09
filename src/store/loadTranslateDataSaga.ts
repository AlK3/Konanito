import * as Eff from 'redux-saga/effects';
import { call, put } from '@redux-saga/core/effects';
import { Action } from '../enums';
import { updateTranslateData } from './dataReducer';

const takeEvery: any = Eff.takeEvery;

interface ILoadTranslateDataProps {
  text: string;
}

function fetchTranslateData(text: string) {
  return fetch("https://translate.mentality.rip/translate", {
		method: "POST",
		body: JSON.stringify({
			q: text,
			source: "en",
			target: "ru",
			format: "text"
		}),
		headers: { "Content-Type": "application/json" }
		})
    .then(response => response.json());
}

function* workerLoadTranslateData({ text }: ILoadTranslateDataProps): Generator {
  const translateData = yield call(fetchTranslateData, text);
  yield put(updateTranslateData(translateData));
}

export function* watchLoadTranslateData() {
  yield takeEvery(Action.LOAD_TRANSLATE_DATA, workerLoadTranslateData);
}