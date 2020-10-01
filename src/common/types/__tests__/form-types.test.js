import FORM from '../form-types';

describe('form-types', () => {
  it('should build valid form action types', () => {
    expect(FORM).toEqual({
      SET: 'FORM.SET',
      SET_PENDING: 'FORM.SET_PENDING',
      SET_SUCCESS: 'FORM.SET_SUCCESS',
      SET_FAILURE: 'FORM.SET_FAILURE',
    });
  });
});
