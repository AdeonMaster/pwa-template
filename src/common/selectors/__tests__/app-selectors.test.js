import { getLang, getIsLoading, getVersion, getIsMenuOpen, getIsDarkMode } from '../app-selectors';
import { LANG } from '~/common/constants';

const state = {
  app: {
    lang: LANG.EN,
    isLoading: false,
    version: '1.0.0',
    isMenuOpen: true,
    isDarkMode: true,
  },
};

describe('app-selectors', () => {
  it('getLang selector', () => {
    expect(getLang(state)).toEqual(state.app.lang);
  });

  it('getIsLoading selector', () => {
    expect(getIsLoading(state)).toEqual(state.app.isLoading);
  });

  it('getVersion selector', () => {
    expect(getVersion(state)).toEqual(state.app.version);
  });

  it('getIsMenuOpen selector', () => {
    expect(getIsMenuOpen(state)).toEqual(state.app.isMenuOpen);
  });

  it('getIsDarkMode selector', () => {
    expect(getIsDarkMode(state)).toEqual(state.app.isDarkMode);
  });
});
