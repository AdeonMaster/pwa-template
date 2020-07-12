import MODAL from '../../types/modal-types';
import { openModal, closeModal, closeModals } from '../modal-actions';

describe('modal-actions', () => {
  it('openModal', () => {
    expect(openModal('TEST_MODAL', { userid: 'test-user-id' })).toEqual({
      type: MODAL.OPEN,
      payload: {
        type: 'TEST_MODAL',
        params: {
          userid: 'test-user-id',
        },
      },
    });
  });

  it('closeModal', () => {
    expect(closeModal('TEST_USER')).toEqual({
      type: MODAL.CLOSE,
      payload: {
        type: 'TEST_USER',
      },
    });
  });

  it('closeModals', () => {
    expect(closeModals()).toEqual({
      type: MODAL.CLOSE_ALL,
    });
  });
});
