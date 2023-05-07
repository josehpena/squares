const {squares} = require('../src/index');

describe('squares', () => {
    it('Should return false when -1 is passed in the parameter', () => {
        expect(squares(2)).toBe(false);
    });

    it('Should return true when the number 4 is passed in the parameter', () => {
        expect(squares(4)).toBe(true);
    });

    it('Should return true when the number 25 is passed in the parameter', () => {
        expect(squares(25)).toBe(true);
    });
});