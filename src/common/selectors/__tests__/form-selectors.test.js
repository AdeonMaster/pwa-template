import { FORM_STATE } from '~/common/constants';
import { getFormState, getFormMessage } from '../form-selectors';

const MOCKED_FORM_TYPE = 'mocked-form-type';

const mockedState = {
  form: {
    [MOCKED_FORM_TYPE]: {
      state: FORM_STATE.FAILURE,
      message: 'Mocked error message',
    },
  },
};
const mockedProps = {
  form: {
    type: MOCKED_FORM_TYPE,
  },
};

describe('form-selectors', () => {
  it('getFormState selector', () => {
    expect(getFormState(mockedState, mockedProps)).toEqual(FORM_STATE.FAILURE);
  });

  it('getFormMessage selector', () => {
    expect(getFormMessage(mockedState, mockedProps)).toEqual('Mocked error message');
  });
});
