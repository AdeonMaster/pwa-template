import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import { values } from 'ramda';

import { APP_ID, LANG } from '../constants';
import { callWithTimeframeDelay } from '~/common/utils/saga';
import APP from '~/common/types/app-types';
import { initSuccess, toggleMenu } from '~/common/actions/app-actions';
import { getVersion, getIsMenuOpen } from '~/common/selectors/app-selectors';

import { loadAllLocalizationSaga } from '~/@adeon/localization/saga/localization-saga';

const MAX_APP_INIT_DELAY = 300;

export function* bootstrapSaga() {
  yield loadAllLocalizationSaga(values(LANG));
}

export function* initSaga() {
  const version = yield select(getVersion);

  // eslint-disable-next-line no-console
  console.log(`${APP_ID}: version ${version}`);

  yield call(callWithTimeframeDelay, MAX_APP_INIT_DELAY, bootstrapSaga);

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
