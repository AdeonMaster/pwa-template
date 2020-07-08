import APP from '~/common/types/app-types';

export const init = () => ({
  type: APP.INIT,
});

export const initSuccess = () => ({
  type: APP.INIT_SUCCESS,
});

export const initFailure = (error) => ({
  type: APP.INIT_FAILURE,
  error,
});

export const setLang = (lang) => ({
  type: APP.SET_LANG,
  payload: {
    lang,
  },
});

export const locationChange = (location) => ({
  type: APP.LOCATION_CHANGE,
  payload: {
    location,
  },
});

export const toggleMenu = (isMenuOpen) => ({
  type: APP.TOGGLE_MENU,
  payload: {
    isMenuOpen,
  },
});
