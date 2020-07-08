import APP from '~/common/types/app-types';
import { LANG } from '~/common/constants';
import { namespacedLocalStorage, getBrowserLang } from '~/common/utils';

export const initialState = {
  version: process.env.PACKAGE_VERSION,
  isLoading: true,
  error: '',
  isMenuOpen: false,
  lang:
    namespacedLocalStorage.getItem('lang') ||
    LANG[(getBrowserLang() || '').split('-')[1]] ||
    LANG.EN, // TO DO: move it to a selector
};

const initSuccess = (state) => ({
  ...state,
  isLoading: false,
});

const initFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  error: error.message,
});

const setLang = (state, { payload: { lang } }) => {
  if (lang === state.lang) {
    return state;
  }

  namespacedLocalStorage.setItem('lang', lang);

  return {
    ...state,
    lang,
  };
};

const toggleMenu = (state, { payload: { isMenuOpen } }) => ({
  ...state,
  isMenuOpen,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case APP.INIT_SUCCESS:
      return initSuccess(state);

    case APP.INIT_FAILURE:
      return initFailure(state, action);

    case APP.SET_LANG:
      return setLang(state, action);

    case APP.TOGGLE_MENU:
      return toggleMenu(state, action);

    default:
      return state;
  }
};
