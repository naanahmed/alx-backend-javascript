const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('...', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 0.8, 1.7)).to.equal(3);
    });
  });

  describe('SUBTRACT', function () {
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 0.2, 0.1)).to.equal(0);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 2.8, 1.7)).to.equal(1);
    });
  });

  describe('DIVIDE', function () {
    it('...', () => {
      expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 3.7, 1)).to.equal(4);
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 0.2, 0.1)).to.equal('Error');
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 2.8, 1.7)).to.equal(1.5);
    });
  });
});
