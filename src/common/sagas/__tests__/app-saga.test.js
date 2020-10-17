import { testSaga } from 'redux-saga-test-plan';

import { initSuccess, toggleMenu } from '~/common/actions/app-actions';
import { getVersion, getIsMenuOpen } from '~/common/selectors/app-selectors';
import { callWithTimeframeDelay } from '~/common/utils/saga';

import { initSaga, locationChangeSaga, bootstrapSaga, MAX_APP_INIT_DELAY } from '../app-saga';

describe('app-saga', () => {
  it('initSaga', () => {
    testSaga(initSaga)
      .next()
      .select(getVersion)
      .next('1.0.0')
      .call(callWithTimeframeDelay, MAX_APP_INIT_DELAY, bootstrapSaga)
      .next()
      .put(initSuccess())
      .next()
      .isDone();
  });

  it('locationChangeSaga', () => {
    testSaga(locationChangeSaga)
      .next()
      .select(getIsMenuOpen)
      .next(true)
      .put(toggleMenu(false))
      .next()
      .isDone();
  });
});
