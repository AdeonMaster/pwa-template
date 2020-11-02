import { getTranslatedString } from '..';

describe('Localization utils', () => {
  describe('getLocalizationFileRequest', () => {
    it.todo('should return a valid request promise');
  });

  describe('getTranslatedString', () => {
    const mockedDictionary = {
      mockedKey: 'mockedString',
    };

    const get = getTranslatedString(mockedDictionary);

    it('should return a valid string by default', () => {
      expect(get('mockedKey')).toBe('mockedString');
    });

    it('should return undefined on invalid dictionary key and check false', () => {
      expect(get('mockedKey2', false)).toBe(undefined);
    });

    it('should return invalid dictionary key', () => {
      expect(get('mockedKey2')).toBe('mockedKey2');
    });
  });
});
