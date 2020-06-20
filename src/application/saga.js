import { put, delay, takeEvery } from 'redux-saga/effects';

import { setLoading } from './actions';

import { FETCH_FX_DATA } from './constants';

function* fetchFxData() {
  yield put(setLoading(true));

  yield delay(2500); // TODO real fetch

  yield put(setLoading(false));

  return null;
}

export default function* applicationSaga() {
  yield takeEvery(FETCH_FX_DATA, fetchFxData);
}
