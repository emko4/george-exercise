import { put, delay, takeEvery } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import { getCurrency } from 'country-currency-map';
import { countries } from 'countries-list';

import { setLoading, setData } from './actions';

import { FETCH_FX_DATA, LOADER_TYPE } from './constants';

import dataJSON from '../assets/data/data.json';

const countriesArray = Object.keys(countries).map((key) => ({
  code: key,
  ...countries[key],
}));

function* fetchFxData(_action) {
  const { showLoader, loaderType } = _action;

  if (showLoader) yield put(setLoading(loaderType));

  // TODO real fetch
  yield delay(2500);
  const data = dataJSON.fx || [];

  const amendedData = data.reduce((acc, { currency, precision, nameI18N, exchangeRate: { buy, middle, sell } = {} }) => {
    if (isEmpty(trim(currency))) return acc;

    const country = countriesArray.find((item) => (item.currency === currency)) || null;

    return [...acc, {
      currency,
      countryCode: country?.code.toLowerCase() || null,
      countryName: country?.name || null,
      precision: precision || 2,
      currencyName: nameI18N || nameI18N || (getCurrency(currency)?.name || '').replace(/\(.+\)$/, '') || null,
      exchangeRate: {
        buy: buy || null,
        middle: middle || null,
        sell: sell || null,
      }
    }];
  }, []);

  yield put(setData(amendedData));

  if (showLoader) yield put(setLoading(LOADER_TYPE.NONE));

  return null;
}

export default function* applicationSaga() {
  yield takeEvery(FETCH_FX_DATA, fetchFxData);
}
