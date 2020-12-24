import APP from '../../types/app-types';
import {
  init,
  initSuccess,
  initFailure,
  setLang,
  setLangSuccess,
  setLangFailure,
  locationChange,
  toggleMenu,
  toggleDarkMode,
} from '../app-actions';
import { LANG } from '~/common/constants';

describe('app-actions', () => {
  it('init', () => {
    expect(init()).toEqual({
      type: APP.INIT,
    });
  });

  it('initSuccess', () => {
    expect(initSuccess()).toEqual({
      type: APP.INIT_SUCCESS,
    });
  });

  it('initFailure', () => {
    expect(initFailure()).toEqual({
      type: APP.INIT_FAILURE,
    });
  });

  it('setLang', () => {
    expect(setLang(LANG.EN)).toEqual({
      type: APP.SET_LANG,
      payload: {
        lang: LANG.EN,
      },
    });
  });

  it('setLangSuccess', () => {
    expect(setLangSuccess(LANG.EN)).toEqual({
      type: APP.SET_LANG_SUCCESS,
      payload: {
        lang: LANG.EN,
      },
    });
  });

  it('setLangFailure', () => {
    expect(setLangFailure(LANG.EN)).toEqual({
      type: APP.SET_LANG_FAILURE,
      payload: {
        lang: LANG.EN,
      },
    });
  });

  it('locationChange', () => {
    expect(locationChange({ pathname: '/new' })).toEqual({
      type: APP.LOCATION_CHANGE,
      payload: {
        location: {
          pathname: '/new',
        },
      },
    });
  });

  it('toggleMenu', () => {
    expect(toggleMenu(true)).toEqual({
      type: APP.TOGGLE_MENU,
      payload: {
        isMenuOpen: true,
      },
    });
  });

  it('toggleDarkMode', () => {
    expect(toggleDarkMode(true)).toEqual({
      type: APP.TOGGLE_DARK_MODE,
      payload: {
        isDarkMode: true,
      },
    });
  });
});
