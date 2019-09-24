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

      it('should return one object form the input', () => {
        let input = [{ id: 1, name: 'foluso' }];
        expect(removePersonWithID(input, 1)).toEqual([]);
      });

      it('should reomve one object form the input', () => {
        let input = [    
        { id: 1, name: 'foluso' },
        { id: 2, name: 'suneet' },
        { id: 3, name: 'paul r' },
        { id: 4, name: 'jonny' },
        { id: 5, name: 'anat' },
        { id: 6, name: 'sam' },
        { id: 7, name: 'tom' },
        { id: 8, name: 'alex' }];
        expect(removePersonWithID(input, 4)).toEqual([   
        { id: 1, name: 'foluso' },
        { id: 2, name: 'suneet' },
        { id: 3, name: 'paul r' },
        { id: 5, name: 'anat' },
        { id: 6, name: 'sam' },
        { id: 7, name: 'tom' },
        { id: 8, name: 'alex' }]);
      });
});
