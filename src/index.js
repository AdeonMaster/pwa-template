import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';
import OfflinePluginRuntime from 'offline-plugin/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './common/reducers/rootReducer';
import rootSaga from './common/sagas/rootSagas';
import App from './app';
import './common/scss/main.scss';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

// service-worker
OfflinePluginRuntime.install({
  onInstalled: () => {
    store.dispatch({
      type: 'sw/installed',
    });
  },
  onUpdating: () => {
    store.dispatch({
      type: 'sw/updating',
    });
  },
  onUpdateReady: () => {
    store.dispatch({
      type: 'sw/update-ready',
    });
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    store.dispatch({
      type: 'sw/updated',
    });
    // window.location.reload();
  },
});

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
