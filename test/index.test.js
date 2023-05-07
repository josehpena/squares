const {squares} = require('../src/index');

describe('squares', () => {
    it('Should return false when -1 is passed in the parameter', () => {
        expect(squares(2)).toBe(false);
    });
});