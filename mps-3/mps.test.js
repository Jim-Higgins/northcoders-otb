const {addFirstAndLastNames} = require('./mps')

describe('MP utils', () => {
  describe.only('addFirstAndLastNames()', () => {
    test('should return an empty array', () => {
      expect(addFirstAndLastNames([])).toEqual([])
    });
  });

  describe('addOfficeCounts()', () => {
    test('', () => {});
  });
});
