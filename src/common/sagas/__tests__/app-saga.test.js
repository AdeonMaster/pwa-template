import { testSaga } from 'redux-saga-test-plan';

import { initSaga, locationChangeSaga } from '../app-saga';
import { initSuccess, toggleMenu } from '~/common/actions/app-actions';
import { getVersion, getIsMenuOpen } from '~/common/selectors/app-selectors';

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
