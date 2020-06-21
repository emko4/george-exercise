import { FETCH_FX_DATA, SET_LOADING, SET_DATA, SET_HEADER_HEIGHT, SET_USE_REQUEST, LOADER_TYPE } from './constants';

export const fetchFxData = (showLoader = true, loaderType = LOADER_TYPE.WHOLE_PAGE) => {
  return {
    type: FETCH_FX_DATA,
    showLoader,
    loaderType,
  };
};

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    value,
  };
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    data,
  };
};

export const setHeaderHeight = (height) => {
  return {
    type: SET_HEADER_HEIGHT,
    height,
  };
};

export const setUseRequest = (value) => {
  return {
    type: SET_USE_REQUEST,
    value,
  };
};
