'use strict';
const Fraction = require('../Fraction.cjs')

module.exports = () => {

    const odds = new Fraction()
    odds.setND(6, 4)

    console.log('fraction string:', odds.toString())
    console.log('fraction integer:', odds.toInteger())
    console.log('fraction modulus:', odds.getModulus())
    console.log('fraction decimal:', odds.toDecimal())
    console.log('odds verified:', odds.verify())
    console.log('typeof odds:', typeof odds)

    const negOdds = odds.getAdditiveInverse()
    console.log('additive inverse:', negOdds.toString())
    console.log('fraction integer:', negOdds.toInteger())
    console.log('fraction modulus:', negOdds.getModulus())
    console.log('fraction decimal:', negOdds.toDecimal())
    console.log('odds verified:', negOdds.verify())

    try {
        const divideByZero = new Fraction()
        divideByZero.setND(5, 0)
    } catch (error) {
        console.log('divideByZero throws:', error)
    }

}
