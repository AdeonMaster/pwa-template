import { FORM_STATE } from '~/common/constants';
import formReducer, { initialState } from '../form-reducer';
import { setFormPending, setFormFailure, setFormSuccess } from '~/common/actions/form-actions';

const MOCKED_FORM_TYPE = 'mocked-form-type';

describe('form-reducer', () => {
  it('setFormPending action', () => {
    const state = initialState;
    const action = setFormPending(MOCKED_FORM_TYPE);

    expect(formReducer(state, action)).toEqual({
      [MOCKED_FORM_TYPE]: {
        state: FORM_STATE.PENDING,
      },
    });
  });

  it('setFormSuccess action', () => {
    const state = initialState;
    const action = setFormSuccess(MOCKED_FORM_TYPE, 'Mocked success message');

    expect(formReducer(state, action)).toEqual({
      [MOCKED_FORM_TYPE]: {
        state: FORM_STATE.SUCCESS,
        message: 'Mocked success message',
      },
    });
  });

  it('setFormFailure action', () => {
    const state = initialState;
    const action = setFormFailure(MOCKED_FORM_TYPE, 'Mocked failure message');

    expect(formReducer(state, action)).toEqual({
      [MOCKED_FORM_TYPE]: {
        state: FORM_STATE.FAILURE,
        message: 'Mocked failure message',
      },
    });
  });
});
