import { all } from '@redux-saga/core/effects';
import { watchLoadTopData } from './loadTopDataSaga';

export function* rootSaga() {
  yield all([
    watchLoadTopData(),
  ]);
}