// npm ./test/test.js

const Fraction = require('../Fraction.cjs');
const assert = require('assert');
const chai = require('chai')
    , expect = chai.expect;





const m = new Fraction(1,2)
const n = new Fraction(-8,4)

describe('Positive Fraction m', () => {
    it('should return true to verify values in the fraction', () => {
      assert.equal(m.getNumerator(), 1)
      assert.equal(m.getDenominator(), 2)
      expect(m.SIGN.positive).to.be.true;
      expect(m.SIGN.negative).to.be.false;
      assert.equal(m.toInteger(), 0)
      assert.equal(m.getModulus(), 1)
      assert.equal(m.toDecimal(), 0.5)
      expect(m.verify()).to.be.true;
    })
})

describe('Negative Fraction n', () => {
    it('should return true to verify values in the fraction', () => {
        assert.equal(n.getNumerator(), 8)
        assert.equal(n.getDenominator(), 4)
        expect(n.SIGN.positive).to.be.false;
        expect(n.SIGN.negative).to.be.true;
        assert.equal(n.toInteger(), -2)
        assert.equal(n.getModulus(), 0)
        assert.equal(n.toDecimal(), -2.0)
        expect(n.verify()).to.be.true;
    })
})

const o = m.multiplyF(n)
const p = m.multiplyI(2)

describe('Fraction Mathematical Methods', () => {
    it('should be able to multiply fractions', () => {
        assert.equal(o.getNumerator(), 8)
        assert.equal(o.getDenominator(), 8)
        expect(o.SIGN.positive).to.be.false;
        expect(o.SIGN.negative).to.be.true;
        assert.equal(o.toInteger(), -1)
        assert.equal(o.getModulus(), 0)
        assert.equal(o.toDecimal(), -1.0)
        expect(o.verify()).to.be.true;
    })
        // const m = new Fraction(1,2)
    it('should be able to multiply fractions by integers', () => {
        assert.equal(p.getNumerator(), 2)
        assert.equal(p.getDenominator(), 2)
        expect(p.SIGN.positive).to.be.true;
        expect(p.SIGN.negative).to.be.false;
        assert.equal(p.toInteger(), 1)
        assert.equal(p.getModulus(), 0)
        assert.equal(p.toDecimal(), 1.0)
        expect(p.verify()).to.be.true;
    })
})












/**

describe('DESCRIPTION', () => {
   it('SUMMARY', () => {

   })
})

*/
