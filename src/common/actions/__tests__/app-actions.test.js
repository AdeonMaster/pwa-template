import APP from '../../types/app-types';
import {
  init,
  initSuccess,
  initFailure,
  setLang,
  locationChange,
  toggleMenu,
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

  it('initSuccess', () => {
    expect(setLang(LANG.EN)).toEqual({
      type: APP.SET_LANG,
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
});
