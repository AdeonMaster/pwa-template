import buildKeyMirrorEnum from '../build-key-mirror-enum';

describe('build-key-mirror-enum', () => {
  it('should build a valid key mirror enum', () => {
    const expectedResult = buildKeyMirrorEnum('TEST', [
      'INIT',
      'SET',
      ['GET', ['SUCCESS', 'FAILURE']],
    ]);

    const result = {
      INIT: 'TEST.INIT',
      SET: 'TEST.SET',
      GET: 'TEST.GET',
      GET_SUCCESS: 'TEST.GET_SUCCESS',
      GET_FAILURE: 'TEST.GET_FAILURE',
    };

    expect(expectedResult).toEqual(result);
  });
});
