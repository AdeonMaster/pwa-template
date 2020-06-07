import { all, put, delay, takeEvery } from 'redux-saga/effects';

import APP from '~/common/types/app-types';
import { initSuccess } from '~/common/actions/app-actions';

export function* initSaga() {
  yield delay(300);

  // remove body loading class
  document.body.className = '';

  yield put(initSuccess());
}

export function* appWatchSaga() {
  yield all([takeEvery(APP.INIT, initSaga)]);
}
