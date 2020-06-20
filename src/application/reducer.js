import { SET_SEARCH_TEXT } from './constants';

const initialState = {
  searchText: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT: {
      const { searchText } = action;

      return {
        ...state,
        searchText,
      };
    }
    default:
      return state;
  }
};
