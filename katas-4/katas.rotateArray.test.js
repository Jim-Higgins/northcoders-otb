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

    it('should rotate the array by any positive multiple number to the right', () => {
        let inputArray = [1, 2, 3, 4, 5]
        expect(rotateArray(inputArray, 2)).toEqual([4, 5, 1, 2, 3])
        expect(rotateArray(inputArray, 3)).toEqual([3, 4, 5, 1, 2])
        expect(rotateArray(inputArray, 4)).toEqual([2, 3, 4, 5, 1])
    });

    it('should rotate the array by -1 to the left', () => {
        let inputArray = [1, 2, 3]
        let rotateBy = -1
        expect(rotateArray(inputArray, rotateBy)).toEqual([2, 3, 1])
    });

    it.only('should rotate the array by any negative multiple number to the left', () => {
        let inputArray = [1, 2, 3, 4, 5]
        expect(rotateArray(inputArray, -3)).toEqual([4, 5, 1, 2, 3])
        // expect(rotateArray(inputArray, -4)).toEqual([5, 1, 2, 3, 4])
    });
});