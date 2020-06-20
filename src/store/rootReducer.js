import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import applicationReducer from '../application/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  application: applicationReducer,
});
