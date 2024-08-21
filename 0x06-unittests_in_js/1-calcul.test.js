const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when adding 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 8 when adding 2.6 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 2.6, 4.5), 8);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when subtracting 4.5 from 1.4', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 0 when subtracting 3.5 from 3.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3.5), 0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when dividing 1.4 by 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 2.5 when dividing 5.1 by 2.4', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.1, 2.4), 2.5);
        });
    });

    it('should throw an error for an invalid type', () => {
        assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });
});