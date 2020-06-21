import { SET_LOADING, SET_DATA, SET_HEADER_HEIGHT, LOADER_TYPE } from './constants';

const initialState = {
  isLoading: LOADER_TYPE.NONE,
  fxData: {},
  headerHeight: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      const { value } = action;

      return {
        ...state,
        isLoading: value,
      };
    }
    case SET_DATA: {
      const { data } = action;

      return {
        ...state,
        fxData: data,
      };
    }
    case SET_HEADER_HEIGHT: {
      const { height } = action;

      return {
        ...state,
        headerHeight: height,
      };
    }
    default:
      return state;
  }
};
