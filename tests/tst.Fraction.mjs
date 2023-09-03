'use strict';
import Fraction from '../Fraction.mjs';

export default function MJStest() {

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

    console.log('\n\n\nERRORS:')

    try {
        const divideByZero = new Fraction()
        divideByZero.setND(5, 0)
    } catch (error) {
        console.log('divideByZero throws:', error)
    }

    console.log('\n\n\nMULTIPLACTION')

    const m = new Fraction()
    m.setND(3,2)

    console.log('\nm.SIGN', m.SIGN)
    console.log('m:', m.toString())

    const n = new Fraction()
    n.setND(4,-5)

    console.log(`\nn.SIGN: ${n.SIGN}`)
    console.log(`n: ${n.toString()}`)

    const o = m.multiplyF(n);

    console.log(`\no.SIGN: ${o.SIGN}`)
    console.log(`m * n = o => ${o.toString()}`)

    const p = m.multiplyI(-2)
    console.log(`\np.SIGN: ${p.SIGN}`)
    console.log('m * -2 = p =>', p.toString())

    const q = m.divideF(n)
    console.log(`\nq.SIGN: ${q.SIGN}`)
    console.log(`m / n = q => ${q.toString()}`)
    

}
