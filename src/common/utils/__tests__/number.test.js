import { isNumber } from '../number';

describe('number utils', () => {
  it('should return true for valid numbers', () => {
    expect(isNumber(2)).toBe(true);
  });

  it('should return false for invalid numbers', () => {
    expect(isNumber('test')).toBe(false);
  });
});
