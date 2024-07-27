// 'use strict'

// const { Enum } = require('./libs/Enum/ENUM.cjs')

// module.exports = class Fraction {

//     constructor( intN=0, intD=0 ){
//         this.n = 0
//         this.d = 0
//         this.sign = new Enum(['POSITIVE', 'NEGATIVE'])
//         this.setND(intN, intD)
//     }

//     getAdditiveInverse(){
//         /**
//          * @method getAdditiveInverse
//          * @todo rewrite
//          */
//         throw new Error('.getAdditiveInverse() needs to be written')
//     }

//     getD(){
//         return this.d
//     }

//     getInverse(){
//         const result = this.duplicate()

//         result.setND(this.d, this.n)

//         return result
//     }

//     getModulus(){
//         /**
//          * @method getModulus
//          * @todo 
//          * Rewrite 
//          */
//         throw new Error('getModulus needs to be written')
//     }

//     getSignedRemainder(){
//         /**
//          * @method getSignedRemainder
//          * @todo 
//          * Rewrite 
//          */
//         throw new Error('getModulus needs to be written')
//     }

//     getN(){
//         return this.n
//     }

//     setND( numerator, denominator){
//         /**
//          * @summary
//          *      setND() sets the numerator and denominator of a Fraction.
//          * @note
//          *      Must be in this order, otherwise will throw DivideByZero Error
//          *              this.setDenominator(denominator)
//          *              this.setNumerator(numerator)
//          */
//         // 
//         this.setDenominator(denominator)
//         this.setNumerator(numerator)
//         this.evaluateSign()
//     }

//     setNumerator( numerator ){
//         this.n = numerator
//         this.verify()
//     }

//     setDenominator( denominator ){
//         this.d = denominator
//     }

//     /** 
//     * @summary evaluateSign() determines if the sign needs to be toggles and 
//     *     swaps SIGN enum.
//     */
//     evaluateSign(){
//         /**
//          * @method evaluateSign
//          * @todo rewrite 
//          */
//         throw new Error('getModulus needs to be written')
//     }

//     toggleSign(){
//         /**
//          * @method toggleSign
//          * @todo rewrite 
//          */
//         throw new Error('toggleSign needs to be written')
//     }

//     toInteger(){
//         /**
//          * @method toInteger
//          * @todo rewrite 
//          */
//         throw new Error('toInteger needs to be written')
//     }

//     toFloat(){
//         /**
//          * @method toFloat
//          * @todo rewrite 
//          */
//         throw new Error('toFloat needs to be written')
//     }

//     toString(){
//         let result

//         this.sign.POSITIVE 
//             ? result = `${this.n} / ${this.d}`
//             : result = `- ${this.n} / ${this.d}`

//         return result
//     }

//     addF(fraction){
//         /**
//          * @method addF
//          * @todo rewrite 
//          */
//         throw new Error('addF() needs to be written')
//     }

//     addI(integer){
//         return this.addF(new Fraction(integer, 1 , positive(integer)))
//     }

//     subtractF(fraction){
//         return this.addF(fraction.getAdditiveInverse())
//     }

//     subtractI(integer){
//         return this.addI(-1*integer)
//     }

//     multiplyF(fraction){
//         /**
//          * @method multiplyF
//          * @todo rewrite 
//          */
//         throw new Error('multiplyF needs to be written')
//     }

//     multiplyI(integer){
//         return this.multiplyF(new Fraction(integer, 1, positive(integer)))
//     }

//     divideF(fraction){
//         return this.multiplyF(fraction.getInverse())
//     }

//     divideI(integer){
//         return this.multiplyF(new Fraction(1, integer, positive(integer)))        
//     }

//     duplicate(){
//         return new Fraction(this.n, this.d, this.sign.positive)
//     }

//     getSign(isInteger=true){
//         if(this.sign.POSITIVE && isInteger){
//             return 1
//         } else if (this.sign.NEGATIVE && isInteger){
//             return -1
//         }
//         if(this.sign.POSITIVE && !isInteger){
//             return 1.0
//         } else if (this.sign.NEGATIVE && !isInteger){
//             return -1.0
//         }
//     }

//     verify(){
//         if( this.n != 0 && this.d === 0 ){
//             throw new TypeError('DivideByZero: denominator cannot be zero unless numerator is also zero.')
//         }
//     }

//     reduce(){
//         /**
//          * @method reduce
//          * @todo
//          * rewrite
//          */
//         throw new Error('reduce() needs to be written')
//     }
// }

// /**
//  * @summary 
//  *   positive() returns true if integer is positive, false if negative.
//  */
// function positive(integer){
//     return integer >= 0
// }