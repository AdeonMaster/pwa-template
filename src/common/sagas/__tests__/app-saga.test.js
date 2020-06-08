import { testSaga } from 'redux-saga-test-plan';

import { initSaga } from '../app-saga';
import { initSuccess } from '~/common/actions/app-actions';
import { getVersion } from '~/common/selectors/app-selectors';

describe('app-saga', () => {
  it('initSaga', () => {
    testSaga(initSaga)
      .next()
      .select(getVersion)
      .next('1.0.0')
      .delay(300)
      .next()
      .put(initSuccess())
      .next()
      .isDone();
  });
});
