const {reverseItems, removePersonWithID} = require('./pure');

describe('reverseItems()', () => {
  it('should return an empty array', () => {
    expect(reverseItems([])).toEqual([]);
  });

  it('should return an equal array when given a one item array', () => {
    let input = ['a'];
    expect(reverseItems(input)).toEqual(['a']);
  });

  it('should return an new array with expected output', () => {
    let input = ['a']
    expect(reverseItems(input)).not.toBe(input);
  });

  it('should not mutate the input array', () => {
    let input = ['a', 'b', 'c'];
    reverseItems(input);
    expect(input).toEqual(['a', 'b', 'c']);
  });

  it('should reverse the order of the input array', () => {
    expect(reverseItems(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    expect(reverseItems(['a', 'b', 'c', 5, 18, 'jim'])).toEqual(['jim', 18, 5, 'c', 'b', 'a']);
  });
});

describe('removePersonWithID()', () => {
    it('should return an empty array', () => {
        expect(removePersonWithID([])).toEqual([]);
      });
      it('should return an new array with expected output', () => {
        let input = [{ id: 1, name: 'foluso' }]
        expect(removePersonWithID(input)).not.toBe(input);
      });
      it('should return an equal array when given a one item array', () => {
        let input = [{ id: 1, name: 'foluso' }];
        expect(removePersonWithID(input)).toEqual([{ id: 1, name: 'foluso' }]);
      });
});
