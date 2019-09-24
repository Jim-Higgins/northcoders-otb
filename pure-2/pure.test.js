const reverseItems = require('./pure');

describe('reverseItems()', () => {
  it('should return an empty array', () => {
    expect(reverseItems([])).toEqual([]);
  });
});
