const reverseItems = require('./pure');

describe('reverseItems()', () => {
  it('should return an empty array', () => {
    expect(reverseItems([])).toEqual([]);
  });

  it('should return an equal array when given a one item array', () => {
    let input = ['a']
    expect(reverseItems(input)).toEqual(['a']);
  });

  it('should return an new array with expected output', () => {
    let input = ['a']
    expect(reverseItems(input)).not.toBe(input);
  });
});
