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
