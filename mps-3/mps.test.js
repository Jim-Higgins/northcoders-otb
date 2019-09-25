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

    it('should return an empty object when given an empty object', () => {
      let input = [{}]
      expect(addFirstAndLastNames(input)).toEqual([{}])
    });
  });
});
