const sumArgs = require('./sum-args');

describe('sumArgs()', function() {
    test('when passed no arguments should return 0', function(){
        expect(sumArgs(0)).toBe(0)
        console.log(sumOfArgs)
    })
    test('should return single arg when passed with a single arg', function(){
        expect(sumArgs(10)).toBe(10)
        expect(sumArgs(15)).toBe(15)
        console.log(sumOfArgs)
    })
    test('should return sum of 2 args when passed 2 args', function(){
        expect(sumArgs(2, 2)).toBe(4)
        expect(sumArgs(10, 10)).toBe(100)
        console.log(sumOfArgs)
    })
});







/*

This function should return the sum of any arguments that are passed to it

*/

// write test cases ...

// test case 1: sumArgs should return 0 when passed no arguments

// test case 2: sumArgs should return 1 arg when passed a single argument

// test case 3: sumArgs should return sum of 2 args when passed 2 args

// test case 4: sumArgs should return the sum of any number of arguments when the number of arguments is greater than 2
