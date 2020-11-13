import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './common/reducers/rootReducer';
import rootSaga from './common/sagas/rootSagas';

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

export default store;
