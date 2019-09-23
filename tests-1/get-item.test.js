const getItem = require('./get-item');

describe('getItem()', function() {
  test('for an index of 0, returns the first item', function() {
    expect(getItem(["a", "b", "c"], 0)).toBe("a");
    expect(getItem(["x", "y", "z"], 0)).toBe("x");
  });
});

/*

This function takes an array of items and an index (number).

The function should return the item at the given index.

If index is greater than or equal to array length it should go back round again.

If the index is negative it should go through the array items in the opposite direction.

e.g. getItem(['a','b','c'], 0) should return 'a'
e.g. getItem(['a','b','c'], 1) should return 'b'

e.g. getItem(['a','b','c'], 3) should return 'a'

e.g. getItem(['a','b','c'], 5) should return 'c'
e.g. getItem(['a','b','c'], 100) should return 'b'

e.g. getItem(['a','b','c'], -1) should return 'c'

*/

// test case 1:

// test case 2:

// test case 3:
