import { all } from 'redux-saga/effects';

import applicationSaga from '../application/saga';

/**
 * Root generator for all application sagas
 */
export default function* () {
  yield all([
    applicationSaga(),
    // ...add another sagas
  ]);
}
