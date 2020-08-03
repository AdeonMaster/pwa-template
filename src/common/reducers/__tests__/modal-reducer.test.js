import modalReducer, { initialState } from '../modal-reducer';
import { openModal, closeModal, closeModals, modalClosed } from '~/common/actions/modal-actions';

const MOCKED_MODAL_ID = 'mocked-modal-id';
const MOCKED_MODAL_ID2 = 'mocked-modal-id2';
const MOCKED_USER_ID = 'mocked-user-id';

describe('modal-reducer', () => {
  it('openModal action', () => {
    const state = initialState;
    const action = openModal(MOCKED_MODAL_ID, { userid: MOCKED_USER_ID });

    expect(modalReducer(state, action)).toEqual({
      [MOCKED_MODAL_ID]: {
        isOpen: true,
        params: {
          userid: MOCKED_USER_ID,
        },
      },
    });
  });

  it('closeModal action', () => {
    const state = initialState;
    const action = closeModal(MOCKED_MODAL_ID);

    expect(modalReducer(state, action)).toEqual({
      [MOCKED_MODAL_ID]: {
        isOpen: false,
      },
    });
  });

  it('closeModals action', () => {
    const state = {
      [MOCKED_MODAL_ID]: {
        isOpen: true,
        params: {
          userid: MOCKED_USER_ID,
        },
      },
      [MOCKED_MODAL_ID2]: {
        isOpen: true,
      },
    };
    const action = closeModals();

    expect(modalReducer(state, action)).toEqual({
      [MOCKED_MODAL_ID]: {
        isOpen: false,
        params: {
          userid: MOCKED_USER_ID,
        },
      },
      [MOCKED_MODAL_ID2]: {
        isOpen: false,
      },
    });
  });

  it('modalClosed action', () => {
    const state = {
      [MOCKED_MODAL_ID]: {
        isOpen: false,
        params: {
          userid: MOCKED_USER_ID,
        },
      },
      [MOCKED_MODAL_ID2]: {
        isOpen: true,
      },
    };
    const action = modalClosed(MOCKED_MODAL_ID);

    expect(modalReducer(state, action)).toEqual({
      [MOCKED_MODAL_ID2]: {
        isOpen: true,
      },
    });
  });
});
