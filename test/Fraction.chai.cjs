// To run: npm test

const Fraction = require('../Fraction.cjs');
const chai = require('chai')
    , expect = chai.expect
    , assert = chai.assert;
// 


const m = new Fraction(1,2)
const n = new Fraction(-8,4)

describe('Positive Fraction m', () => {
    it('should return true to verify values in the fraction', () => {
      assert.equal(m.getN(), 1)
      assert.equal(m.getD(), 2)
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
        assert.equal(n.getN(), 4)
        assert.equal(n.getD(), 8)
        expect(n.SIGN.positive).to.be.false;
        expect(n.SIGN.negative).to.be.true;
        assert.equal(n.toInteger(), 0)
        assert.equal(n.getModulus(), -4)
        assert.equal(n.toDecimal(), -0.50)
        expect(n.verify()).to.be.true;
    })
})

describe('Fraction Mathematical Methods', () => {

    const o = m.multiplyF(n)
    const p = m.multiplyI(2)
    const q = m.divideF(n)
    const r = m.divideI(-2)

    it('should be able to multiply fractions together', () => {
        assert.equal(o.getN(), 8)
        assert.equal(o.getD(), 8)
        expect(o.SIGN.positive).to.be.false;
        expect(o.SIGN.negative).to.be.true;
        assert.equal(o.toInteger(), -1)
        assert.equal(o.getModulus(), 0)
        assert.equal(o.toDecimal(), -1.0)
        expect(o.verify()).to.be.true;
    })

    it('should be able to multiply fractions by integers', () => {
        assert.equal(p.getN(), 2)
        assert.equal(p.getD(), 2)
        expect(p.SIGN.positive).to.be.true;
        expect(p.SIGN.negative).to.be.false;
        assert.equal(p.toInteger(), 1)
        assert.equal(p.getModulus(), 0)
        assert.equal(p.toDecimal(), 1.0)
        expect(p.verify()).to.be.true;
    })

    it('should be able to divide fractions by fractions', () => {
        assert.equal(q.getN(), 4)
        assert.equal(q.getD(), 16)
        expect(q.SIGN.positive).to.be.false;
        expect(q.SIGN.negative).to.be.true;
        assert.equal(q.toInteger(), 0)
        assert.equal(q.getModulus(), -4)
        assert.equal(q.toDecimal(), -0.25)
        expect(q.verify()).to.be.true;
    })

    it('should be able to divide fractions by integers', () => {
        assert.equal(r.getN(), 1)
        assert.equal(r.getD(), 4)
        expect(r.SIGN.positive).to.be.false;
        expect(r.SIGN.negative).to.be.true;
        assert.equal(r.toInteger(), 0)
        assert.equal(r.getModulus(), -1)
        assert.equal(r.toDecimal(), -0.25)
        expect(r.verify()).to.be.true;
    })

})



/**

describe('DESCRIPTION', () => {
   it('SUMMARY', () => {

   })
})

*/
