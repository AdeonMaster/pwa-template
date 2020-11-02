import APP from '~/common/types/app-types';
import { namespacedLocalStorage } from '~/common/utils';

export const initialState = {
  version: process.env.PACKAGE_VERSION,
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

const toggleDarkMode = (state, { payload: { isDarkMode } }) => ({
  ...state,
  isDarkMode,
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

    case APP.TOGGLE_DARK_MODE:
      return toggleDarkMode(state, action);

    default:
      return state;
  }
};
