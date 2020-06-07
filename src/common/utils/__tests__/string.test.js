import { format } from '../string';

describe('string', () => {
  it('should format string properly', () => {
    expect(format('The quick brown {0} jumps over a lazy {1}.', 'fox', 'dog')).toBe(
      'The quick brown fox jumps over a lazy dog.',
    );
  });
});
