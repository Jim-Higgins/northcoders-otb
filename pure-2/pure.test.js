const {reverseItems, removePersonWithID, updateTasks} = require('./pure');

describe('reverseItems()', () => {
  it('should return an empty array', () => {
    expect(reverseItems([])).toEqual([]);
  });

  it('should return an equal array when given a one item array', () => {
    const input = ['a'];
    expect(reverseItems(input)).toEqual(['a']);
  });

  it('should return an new array with expected output', () => {
    const input = ['a']
    expect(reverseItems(input)).not.toBe(input);
  });

  it('should not mutate the input array', () => {
    const input = ['a', 'b', 'c'];
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
        const input = [{ id: 1, name: 'foluso' }]
        expect(removePersonWithID(input)).not.toBe(input);
      });

    
      it('should return an equal array when given a one item array', () => {
        const input = [{ id: 1, name: 'foluso' }];
        expect(removePersonWithID(input)).toEqual([{ id: 1, name: 'foluso' }]);
      });

      it('should return one object form the input', () => {
        const input = [{ id: 1, name: 'foluso' }];
        expect(removePersonWithID(input, 1)).toEqual([]);
      });

      it('should reomve one object form the input', () => {
        const input = [    
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

describe('updateTasks()', () => {
  it('Returns a new object', () => {
    const input = {};
    expect(updateTasks(input)).toEqual({});
    expect(updateTasks(input)).not.toBe(input);
  });

  it('Returns a new object with the same key value pairs', () => {
    const input = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
    expect(updateTasks(input)).toEqual({ name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] });
  });

  it('Returns a new object with updated tasks value when give one task', () => {
    expect(updateTasks({ name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] }, 'feed mitch')).toEqual({ name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery', 'feed mitch'] });
  });

  it('Returns a new object with updated tasks value when give multiple new tasks', () => {
    expect(updateTasks({ name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] }, 'feed mitch', 'slap mitch')).toEqual({ name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery', 'feed mitch', 'slap mitch'] });
  });

  it('Does not mutate the tasks value', () => {
    const person = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] }
    const output = updateTasks(person, 'feed mitch', 'slap mitch')
    expect(output.tasks).not.toBe(person.tasks)
  });
});