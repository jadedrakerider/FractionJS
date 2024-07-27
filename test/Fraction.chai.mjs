// To run: npm test

import { Fraction } from '../Fraction.mjs'
import { expect, assert } from 'chai'




const m = new Fraction(1, 2)
const n = new Fraction(-8, 4)
const o = m.multiplyF(n)
const p = m.multiplyI(2)
const q = m.divideF(n)
const r = m.divideI(-2)
let counter = 1;

describe(`Fraction MJS`, () => {

    it(`Test ${counter}: Positive Fraction`, () => {
        console.log('m.SIGN.valueOf()', m.SIGN.v())
        assert.equal(m.getN(), 1)
        assert.equal(m.getD(), 2)
        expect(m.SIGN.v()).to.eql('POSITIVE')
        expect(m.SIGN.v()).not.to.eql('NEGATIVE')
        assert.equal(m.toInteger(), 0)
        assert.equal(m.getModulus(), 1)
        assert.equal(m.toFloat(), 0.5)
        expect(m.verify()).to.be.true;
    })
    counter++;

    it(`Test ${counter}: Negative Fraction`, () => {
        assert.equal(n.getN(), 8)
        assert.equal(n.getD(), 4)
        expect(n.SIGN.v()).not.to.eql('POSITIVE')
        expect(n.SIGN.v()).to.eql('NEGATIVE')
        assert.equal(n.toInteger(), -2)
        assert.equal(n.getModulus(), 0)
        assert.equal(n.toFloat(), -2.0)
        expect(n.verify()).to.be.true;
    })
    counter++;

    it(`Test ${counter}: Multiply Fractions together`, () => {
        assert.equal(o.getN(), 8)
        assert.equal(o.getD(), 8)
        expect(o.SIGN.v()).not.to.eql('POSITIVE')
        expect(o.SIGN.v()).to.eql('NEGATIVE')
        assert.equal(o.toInteger(), -1)
        assert.equal(o.getModulus(), 0)
        assert.equal(o.toFloat(), -1.0)
        expect(o.verify()).to.be.true;
    })
    counter++;

    it(`Test ${counter}: Multiply Fractions by integers`, () => {
        assert.equal(p.getN(), 2)
        assert.equal(p.getD(), 2)
        expect(p.SIGN.v()).to.eql('POSITIVE')
        expect(p.SIGN.v()).not.to.eql('NEGATIVE')
        assert.equal(p.toInteger(), 1)
        assert.equal(p.getModulus(), 0)
        assert.equal(p.toFloat(), 1.0)
        expect(p.verify()).to.be.true;
    })
    counter++;

    it(`Test ${counter}: Divide Fractions`, () => {
        assert.equal(q.getN(), 4)
        assert.equal(q.getD(), 16)
        expect(q.SIGN.v()).to.eql('POSITIVE')
        expect(q.SIGN.v()).not.to.eql('NEGATIVE')
        assert.equal(q.toInteger(), 0)
        assert.equal(q.getModulus(), 4)
        assert.equal(q.toFloat(), 0.25)
        expect(q.verify()).to.be.true;
    })
    counter++;

    it(`Test ${counter}: Divide Fractions by integers`, () => {
        assert.equal(r.getN(), 1)
        assert.equal(r.getD(), 4)
        expect(r.SIGN.v()).not.to.eql('POSITIVE')
        expect(r.SIGN.v()).to.eql('NEGATIVE')
        assert.equal(r.toInteger(), 0)
        assert.equal(r.getModulus(), 1)
        assert.equal(r.toFloat(), -0.25)
        expect(r.verify()).to.be.true;
    })
    counter++;

    it(`Test ${counter}: toString methods`, () => {
        assert.equal(m.toString(), '1 / 2')
        assert.equal(n.toString(), '- 8 / 4')
        assert.equal(o.toString(), '- 8 / 8')
        assert.equal(p.toString(), '2 / 2')
        assert.equal(q.toString(), '- 4 / 16')
    })
    counter++;

    it(`Test ${counter}: Error Testing DivideByZero`, () => {
        let s = new Fraction(1, 1)
        expect(() => { s.setND(1, 2) }).not.to.throw(TypeError, 'DivideByZero')
        expect(() => { s.setND(1, 0) }).to.throw(TypeError, 'DivideByZero')
    })
    counter++;

    // s.verify() checks for DivideByZero error, nothing else
    // it(`Test ${counter}: Error Testing SignConflict`, () => {
    //     let s = new Fraction(1, 1)
    //     s.SIGN.select('POSITIVE')
    //     expect(() => { s.verify() }).not.to.throw(Error)
    //     s.SIGN.select('NEGATIVE')
    //     expect(() => { s.verify() }).not.to.throw(Error)
    //     s.SIGN.index.POSITIVE = false;
    //     s.SIGN.index.NEGATIVE = false;
    //     expect(() => { s.verify() }).to.throw(Error, 'SignConflict')
    //     s.SIGN.index.POSITIVE = true;
    //     s.SIGN.index.NEGATIVE = true;
    //     expect(() => { s.verify() }).to.throw(Error, 'SignConflict')
    // })
    // counter++;

})

/**

describe(`DESCRIPTION`, () => {
   it(`SUMMARY`, () => {

   })
})

*/
