import { all, put, takeEvery, call, select } from 'redux-saga/effects';

import { APP_ID, GLOBAL_LOCALE_WINDOW_PATH, MODAL } from '~/common/constants';
import { callWithTimeframeDelay } from '~/common/utils/saga';
import APP from '~/common/types/app-types';
import {
  initSuccess,
  // initFailure,
  toggleMenu,
  setLang,
  setLangSuccess,
  setLangFailure,
} from '~/common/actions/app-actions';
import { openModal } from '~/common/actions/modal-actions';
import { getVersion, getIsMenuOpen, getLang } from '~/common/selectors/app-selectors';
import { getLocalizationFileRequest } from '~/common/requests/app-requests';

export const MAX_APP_INIT_DELAY = 300;

export function* bootstrapSaga() {
  const lang = yield select(getLang);

  yield put(setLang(lang));

  // yield race({
  //   success: yield take(APP.SET_LANG_SUCCESS),
  //   failure: yield take(APP.SET_LANG_FAILURE),
  //   timeout: yield delay(10000),
  // });

  // if (failure || timeout) {
  //   yield put(initFailure('Error while loading localization file'));
  // }
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

export function* setLangSaga({ payload: { lang } }) {
  if (!window[GLOBAL_LOCALE_WINDOW_PATH]) {
    window[GLOBAL_LOCALE_WINDOW_PATH] = {};
  }

  if (window[GLOBAL_LOCALE_WINDOW_PATH][lang]) {
    yield put(setLangSuccess(lang));
    return;
  }

  const [response, error] = yield call(getLocalizationFileRequest, lang);

  if (error) {
    // eslint-disable-next-line no-console
    console.error(`Localization: Can't load localization file (${lang})`);

    window[GLOBAL_LOCALE_WINDOW_PATH][lang] = {};

    yield put(setLangFailure(lang));
    return;
  }

  window[GLOBAL_LOCALE_WINDOW_PATH][lang] = response.data;

  yield put(setLangSuccess(lang));
}

export function* crashErrorSaga({ payload: { error, errorInfo } }) {
  yield put(openModal(MODAL.CRASH, { error, errorInfo }));
}

export function* serviceWorkerUpdatedSaga() {
  yield put(openModal(MODAL.NEW_VERSION));
}

export default function* appRootSaga() {
  yield all([
    takeEvery(APP.INIT, initSaga),
    takeEvery(APP.LOCATION_CHANGE, locationChangeSaga),
    takeEvery(APP.SET_LANG, setLangSaga),
    takeEvery(APP.CRASH_ERROR, crashErrorSaga),
    takeEvery('sw/updated', serviceWorkerUpdatedSaga),
  ]);
}
