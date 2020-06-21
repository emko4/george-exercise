import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';

import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  // Create middlewares
  const sagaMiddleware = createSagaMiddleware();
  const routingMiddleware = routerMiddleware(history);

  // Initialization of middlewares
  const middleware = applyMiddleware(sagaMiddleware, routingMiddleware);

  // enhancer for production mode
  let enhancer = compose(middleware);

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-underscore-dangle
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      // enhancer for development mode with DevTool extension
      enhancer = compose(
        middleware,
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      );
    } else {
      // enhancer for development mode without DevTool extension
      // eslint-disable-next-line no-console
      console.warn("You haven't devTools extension in browser!");
    }
  }

  // Create store
  const store = createStore(
    createRootReducer(history),
    initialState,
    enhancer,
  );

  // Run saga middleware with given root saga
  let sagaTask = sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(createRootReducer(history))
    });

    // Enable Webpack hot module replacement for sagas.
    module.hot.accept('./rootSaga', () => {
      // eslint-disable-next-line global-require
      const getNewSagas = require('./rootSaga').default;

      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(getNewSagas);
      });
    });
  }

  return store;
}
