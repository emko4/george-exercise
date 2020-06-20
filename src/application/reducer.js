import { SET_LOADING } from './constants';

const initialState = {
  isLoading: false,
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
    default:
      return state;
  }
};
