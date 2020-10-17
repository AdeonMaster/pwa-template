import FORM from '../../types/form-types';
import { setFormPending, setFormSuccess, setFormFailure } from '../form-actions';

const MOCKED_FORM_TYPE = 'mocked-form-type';

describe('form-actions', () => {
  it('setFormPending', () => {
    expect(setFormPending(MOCKED_FORM_TYPE)).toEqual({
      type: FORM.SET_PENDING,
      payload: {
        type: MOCKED_FORM_TYPE,
      },
    });
  });

  it('setFormSuccess', () => {
    expect(setFormSuccess(MOCKED_FORM_TYPE, 'Mocked success message')).toEqual({
      type: FORM.SET_SUCCESS,
      payload: {
        type: MOCKED_FORM_TYPE,
        message: 'Mocked success message',
      },
    });
  });

  it('setFormFailure', () => {
    expect(setFormFailure(MOCKED_FORM_TYPE, 'Mocked failure message')).toEqual({
      type: FORM.SET_FAILURE,
      payload: {
        type: MOCKED_FORM_TYPE,
        message: 'Mocked failure message',
      },
    });
  });
});
