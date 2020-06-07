import { testSaga } from 'redux-saga-test-plan';

import { initSaga } from '../app-saga';
import { initSuccess } from '~/common/actions/app-actions';

describe('app-saga', () => {
  it('initSaga', () => {
    testSaga(initSaga).next().delay(300).next().put(initSuccess()).next().isDone();
  });
});
