import { getLang, getIsLoading } from '../app-selectors';
import { LANG } from '~/common/constants';

const state = {
  app: {
    lang: LANG.EN,
    isLoading: false,
  },
};

describe('app-selectors', () => {
  it('getLang', () => {
    expect(getLang(state)).toEqual(LANG.EN);
  });

  it('getIsLoading', () => {
    expect(getIsLoading(state)).toEqual(false);
  });
});
