function stringLength(str) {
  if (str.length < 1) {
    throw new Error('String must be at least 1 character long');
  }
  if (str.length > 10) {
    throw new Error('String must not be longer than 10 characters');
  }
  return str.length;
}

describe('stringLength', () => {
  it('returns the length of the string when given a valid input', () => {
    expect(stringLength('hello')).toBe(5);
  });

  it('throws an error if the input string is empty', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long');
  });

  it('throws an error if the input string is longer than 10 characters', () => {
    expect(() => stringLength('this is a very long string')).toThrow('String must not be longer than 10 characters');
  });
});
