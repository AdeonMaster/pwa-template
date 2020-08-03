import { all, fork } from 'redux-saga/effects';

import appRootSaga from '~/common/sagas/app-saga';
import reduxSocketCommunicationRootSaga from '~/@adeon/redux-socket-communication/sagas/socket-saga';

export default function* rootSaga() {
  yield all([fork(appRootSaga), fork(reduxSocketCommunicationRootSaga)]);
}
