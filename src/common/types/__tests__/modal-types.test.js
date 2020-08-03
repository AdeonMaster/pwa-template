import MODAL from '../modal-types';

describe('modal-types', () => {
  it('should build valid modal action types', () => {
    expect(MODAL).toEqual({
      OPEN: 'MODAL.OPEN',
      CLOSE: 'MODAL.CLOSE',
      CLOSE_ALL: 'MODAL.CLOSE_ALL',
      OPENED: 'MODAL.OPENED',
      CLOSED: 'MODAL.CLOSED',
    });
  });
});
