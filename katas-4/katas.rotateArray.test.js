const { rotateArray } = require('./katas.rotateArray')

describe('rotateArray()', () => {
    it('should return an empty array', () => {
        expect(rotateArray([])).toEqual([])
    });
    
    it('should return a new array', () => {
        let input = []
        expect(rotateArray(input)).not.toBe(input)
    });
});