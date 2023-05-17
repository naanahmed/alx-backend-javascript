const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 0.1, 0.2), 0);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 0.8, 1.7), 3);
    });
  });

  describe('SUBTRACT', function () {
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 3.7, 1), 3);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.2, 0.1), 0);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.8, 1.7), 1);
    });
  });

  describe('DIVIDE', function () {
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 4.5, 1.4), 5);
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 3.7, 1), 4);
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 3.7, 1.2), 4);
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 3.7, 1.5), 2);
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 0.2, 0.1), 'Error');
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 2.8, 1.7), 1.5);
    });
  });
});
