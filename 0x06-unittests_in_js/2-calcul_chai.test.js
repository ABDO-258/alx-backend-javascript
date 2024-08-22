const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when adding 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 8 when adding 2.6 and 4.5', () => {
            expect(calculateNumber('SUM', 2.6, 4.5)).to.equal(8);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when subtracting 4.5 from 1.4', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return 0 when subtracting 3.5 from 3.5', () => {
            expect(calculateNumber('SUBTRACT', 3.5, 3.5)).to.equal(0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when dividing 1.4 by 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should return 2.5 when dividing 5.1 by 2.4', () => {
            expect(calculateNumber('DIVIDE', 5.1, 2.4)).to.equal(2.5);
        });
    });

    it('should throw an error for an invalid type', () => {
        expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
    });
});