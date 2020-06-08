import { all, put, delay, takeEvery, select } from 'redux-saga/effects';

import APP from '~/common/types/app-types';
import { initSuccess } from '~/common/actions/app-actions';
import { getVersion } from '~/common/selectors/app-selectors';
import { APP_ID } from '../constants';

export function* initSaga() {
  const version = yield select(getVersion);

  // eslint-disable-next-line no-console
  console.log(`${APP_ID}: version ${version}`);

  yield delay(300);

  // remove body loading class
  document.body.className = '';

  yield put(initSuccess());
}

export function* appWatchSaga() {
  yield all([takeEvery(APP.INIT, initSaga)]);
}
