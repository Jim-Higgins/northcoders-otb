const{herdTheBabies} = require('./katas')

describe('herdTheBabies stuff', () => {
    it('should return an empty string when passed an empty string', () => {
        expect(herdTheBabies('')).toEqual('')
    });
    
    it('should return 1 character when given 1 character', () => {
        expect(herdTheBabies('a')).toEqual('a')
    });
});