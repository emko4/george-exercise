import { FETCH_FX_DATA, SET_LOADING } from './constants';

export const fetchFxData = () => {
  return {
    type: FETCH_FX_DATA,
  };
}

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    value,
  };
}
