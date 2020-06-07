import classnames from '../classnames';

describe('classnames', () => {
  it('should build a basic class string from array', () => {
    expect(classnames(['first', 'second'])).toEqual('first second');
  });

  it('should build a class string from object', () => {
    expect(classnames({ first: true, second: false, third: true })).toEqual('first third');
  });

  it('should build a class string from mixed array', () => {
    expect(classnames(['first', { second: false }, { third: true }])).toEqual('first third');
  });
});
