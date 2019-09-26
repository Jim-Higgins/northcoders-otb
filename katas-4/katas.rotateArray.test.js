const { rotateArray } = require('./katas.rotateArray')

describe('rotateArray()', () => {
    it('should return an empty array', () => {
        expect(rotateArray([])).toEqual([])
    });

    it('should return a new array', () => {
        let input = []
        expect(rotateArray(input)).not.toBe(input)
    });

    it('should return a unchanged array when given no number', () => {
        let inputArray = [1, 2, 3]
        expect(rotateArray(inputArray)).toEqual([1, 2, 3])
        
    });
});