const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when input is (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when input is (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when input is (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when input is (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when input is (0, 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -2 when input is (-1, -1)', () => {
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });
});
