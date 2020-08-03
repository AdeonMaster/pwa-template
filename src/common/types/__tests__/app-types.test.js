import APP from '../app-types';

describe('app-types', () => {
  it('should build valid app action types', () => {
    expect(APP).toEqual({
      INIT: 'APP.INIT',
      INIT_SUCCESS: 'APP.INIT_SUCCESS',
      INIT_FAILURE: 'APP.INIT_FAILURE',
      SET_LANG: 'APP.SET_LANG',
      LOCATION_CHANGE: 'APP.LOCATION_CHANGE',
      TOGGLE_MENU: 'APP.TOGGLE_MENU',
    });
  });
});
