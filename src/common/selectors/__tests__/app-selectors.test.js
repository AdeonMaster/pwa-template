import { getLang, getIsLoading, getVersion } from '../app-selectors';
import { LANG } from '~/common/constants';

const state = {
  app: {
    lang: LANG.EN,
    isLoading: false,
    version: '1.0.0',
  },
};

describe('app-selectors', () => {
  it('getLang', () => {
    expect(getLang(state)).toEqual(state.app.lang);
  });

  it('getIsLoading', () => {
    expect(getIsLoading(state)).toEqual(state.app.isLoading);
  });

  it('getVersion', () => {
    expect(getVersion(state)).toEqual(state.app.version);
  });
});
