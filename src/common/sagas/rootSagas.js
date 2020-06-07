import { all, fork } from 'redux-saga/effects';

import { appWatchSaga } from '~/common/sagas/app-saga';

export default function* rootSaga() {
  yield all([fork(appWatchSaga)]);
}
