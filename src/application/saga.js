import { put, delay, takeEvery } from 'redux-saga/effects';

import { setLoading, setData } from './actions';

import { FETCH_FX_DATA, LOADER_TYPE } from './constants';

import data from '../assets/data/data.json';

function* fetchFxData(_action) {
  const { showLoader, loaderType } = _action;

  if (showLoader) yield put(setLoading(loaderType));

  // TODO real fetch
  yield delay(2500);
  yield put(setData(data));

  if (showLoader) yield put(setLoading(LOADER_TYPE.NONE));

  return null;
}

export default function* applicationSaga() {
  yield takeEvery(FETCH_FX_DATA, fetchFxData);
}
