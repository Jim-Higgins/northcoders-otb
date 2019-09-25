const {addFirstAndLastNames} = require('./mps')

describe('MP utils', () => {
  describe('addFirstAndLastNames()', () => {
    test('should return an empty array', () => {
      expect(addFirstAndLastNames([])).toEqual([])
    });

    it('should return a new array', () => {
      let input = []
      expect(addFirstAndLastNames(input)).not.toBe(input)
    });
  });
});
