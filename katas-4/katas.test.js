const{herdTheBabies} = require('./katas')

describe('herdTheBabies stuff', () => {
    it('should return an empty string when passed an empty string', () => {
        expect(herdTheBabies('')).toEqual('')
    });

    it('should return 1 character when given 1 character', () => {
        expect(herdTheBabies('a')).toEqual('a')
    });

    it('should sort a string of 2 characters with uppercase first', () => {
        expect(herdTheBabies('aA')).toEqual('Aa')
    });

    it('should sort a string of three characters where using two different letters', () => {
        expect(herdTheBabies('aBA')).toEqual('AaB')
    });
});