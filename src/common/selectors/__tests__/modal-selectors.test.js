import { getModalIsOpen, getModalParams } from '../modal-selectors';

const MOCKED_MODAL_TYPE = 'mocked-form-type';

const mockedState = {
  modal: {
    [MOCKED_MODAL_TYPE]: {
      isOpen: true,
      params: {
        userId: 'mocked-user-id',
      },
    },
  },
};
const mockedProps = {
  modal: {
    type: MOCKED_MODAL_TYPE,
  },
};

describe('modal-selectors', () => {
  it('getModalIsShown selector', () => {
    expect(getModalIsOpen(mockedState, mockedProps)).toBe(true);
  });

  it('getFormMessage selector', () => {
    expect(getModalParams(mockedState, mockedProps)).toEqual({
      userId: 'mocked-user-id',
    });
  });
});
