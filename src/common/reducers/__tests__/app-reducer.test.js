import appReducer, { initialState } from '../app-reducer';
import { initSuccess, initFailure, setLang, toggleMenu } from '~/common/actions/app-actions';
import { LANG } from '~/common/constants';

describe('app-reducer', () => {
  it('initSuccess action', () => {
    const state = initialState;
    const action = initSuccess();

    expect(appReducer(state, action)).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it('initFailure action', () => {
    const state = initialState;
    const action = initFailure(new Error('Test error'));

    expect(appReducer(state, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: 'Test error',
    });
  });

  it('setLang action', () => {
    const state = initialState;
    const action = setLang(LANG.DE);

    expect(appReducer(state, action)).toEqual({
      ...initialState,
      lang: LANG.DE,
    });
  });

  it('toggleMenu action', () => {
    const state = initialState;
    const action = toggleMenu(true);

    expect(appReducer(state, action)).toEqual({
      ...initialState,
      isMenuOpen: true,
    });
  });
});
