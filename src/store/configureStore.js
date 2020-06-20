import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  // Create middlewares
  const routingMiddleware = routerMiddleware(history);

  // Initialization of middlewares
  const middleware = applyMiddleware(routingMiddleware);

  // enhancer for production mode
  let enhancer = compose(middleware);

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

  // Create store
  const store = createStore(
    createRootReducer(history),
    initialState,
    enhancer,
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }

  return store;
}
