import { all, put, delay, takeEvery, select } from 'redux-saga/effects';

import { APP_ID } from '../constants';
import APP from '~/common/types/app-types';
import { initSuccess, toggleMenu } from '~/common/actions/app-actions';
import { getVersion, getIsMenuOpen } from '~/common/selectors/app-selectors';

export function* initSaga() {
  const version = yield select(getVersion);

  // eslint-disable-next-line no-console
  console.log(`${APP_ID}: version ${version}`);

  yield delay(300);

  // remove body loading class
  document.body.className = '';

  yield put(initSuccess());
}

export function* locationChangeSaga() {
  const isMenuOpen = yield select(getIsMenuOpen);

  if (isMenuOpen) {
    yield put(toggleMenu(false));
  }
}

export default function* appRootSaga() {
  yield all([takeEvery(APP.INIT, initSaga), takeEvery(APP.LOCATION_CHANGE, locationChangeSaga)]);
}
