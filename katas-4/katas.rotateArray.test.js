const { rotateArray } = require('./katas.rotateArray')

describe.only('rotateArray()', () => {
    it('should return an empty array', () => {
        expect(rotateArray([])).toEqual([])
    });

    it('should return a new array', () => {
        let input = []
        expect(rotateArray(input)).not.toBe(input)
    });

    it('should return a unchanged array when given no number', () => {
        let inputArray = [1, 2, 3]
        // let rotateBy = 0
        expect(rotateArray(inputArray)).toEqual([1, 2, 3])
    });

    it('should rotate the array by 1 to the right', () => {
        let inputArray = [1, 2, 3]
        let rotateBy = 1
        expect(rotateArray(inputArray, rotateBy)).toEqual([3, 1, 2])
    });
});