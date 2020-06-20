import { SET_SEARCH_TEXT } from './constants';

export const setSearchText = (searchText) => {
  return {
    type: SET_SEARCH_TEXT,
    searchText,
  };
}
