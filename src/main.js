import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger as createLoggerMiddleware } from 'redux-logger';

import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSagas';
import App from './components/App';
import './scss/main.scss';

const loggerMiddleware = createLoggerMiddleware();
const sagaMiddleware = createSagaMiddleware();

const middlewares = process.env.NODE_ENV === 'development'
  ? [
    thunkMiddleware,
    sagaMiddleware,
    loggerMiddleware
  ]
  : [
    thunkMiddleware,
    sagaMiddleware
  ];
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
