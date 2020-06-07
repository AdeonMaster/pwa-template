import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';

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

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  require('offline-plugin/runtime').install();
}

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
