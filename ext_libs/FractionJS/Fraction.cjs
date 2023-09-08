'use strict';
 
const ENUM = require('../ENUMJS/ENUM.cjs')

module.exports = class Fraction {

    constructor( intN=0, intD=0, isPositive=true ){
        this.n = 0;
        this.d = 0;
        this.SIGN = new ENUM('positive')
        this.SIGN.setKey('negative')
        this.setND(intN, intD)
        
        if(!isPositive){
            this.SIGN.selectKey('negative')
        }
    }

    getAdditiveInverse(){
        const result = this;

        result.SIGN.positive = !result.SIGN.positive;
        result.SIGN.negative = !result.SIGN.negative;

        return result;
    }

    getD(){
        return this.d;
    }

    getInverse(){
        const result = this;
        
        result.setND(this.d, this.n)

        return result;
    }

    getModulus(){
        return this.sign() * (this.n % this.d);
    }

    getN(){
        return this.n;
    }

    setND( numerator, denominator){
        /**
         * @summary
         *      setND() sets the numerator and denominator of a Fraction.
         * @note
         *      Must be in this order, otherwise will throw DivideByZero Error
         *              this.#setDenominator(denominator)
         *              this.#setNumerator(numerator)
         */
        // 
        this.#setDenominator(denominator)
        this.#setNumerator(numerator)
        this.evaluateSign()
    }

    #setNumerator( numerator ){
        this.n = numerator;
        this.verify()
    }

    #setDenominator( denominator ){
        this.d = denominator;
        this.verify();
    }

    /** 
    * @summary evaluateSign() determines if the sign needs to be toggles and 
    *     swaps SIGN enum.
    */
    evaluateSign(){
        if( ((this.n < 0 && this.d >= 0) || (this.n >= 0 && this.d < 0)) && this.SIGN.positive) {
            this.n = Math.abs(this.n)
            this.d = Math.abs(this.d)
            this.SIGN.selectKey('negative')
        } else if( ((this.n < 0 && this.d >= 0) || (this.n >= 0 && this.d < 0)) && this.SIGN.negative) {
            this.n = Math.abs(this.n)
            this.d = Math.abs(this.d)
            this.SIGN.selectKey('positive')
        } else {
            this.n = Math.abs(this.n)
            this.d = Math.abs(this.d)
        }
    }

    toInteger(){
        return this.sign() * Math.floor(this.n/this.d);
    }

    toDecimal(){
    /** 
    * @note the sign() method cannot be used here because a decimal is required.
    */
        if(this.SIGN.positive){
            return 1.0*this.n/this.d;
        } else {
            return (-1.0)*(this.n/this.d);
        }

        
    }

    toString(){
        let result;
        
        this.SIGN.positive 
            ? result = `${this.n} / ${this.d}`
            : result = `- ${this.n} / ${this.d}`

        return result;
    }

    addF(fraction){
        const modifierT = this.sign()
        const modifierF = fraction.sign()
        const sign = this.SIGN.positive === fraction.SIGN.positive;
        let n,d;
        
        if(this.d != fraction.d){
            n = modifierT*this.n*fraction.d + modifierF*fraction.n*this.d;
            d = this.d*fraction.d;    
        } else {
            n = modifierT*this.n + modifierF*fraction.n;
            d = this.d;
        }

        return new Fraction(n, d, sign)
    }

    addI(integer){
        return this.addF(new Fraction(integer, 1 , positive(integer)))
    }

    subtractF(fraction){
        return this.addF(fraction.getAdditiveInverse())
    }

    subtractI(integer){
        return this.addI(-1*integer);
    }

    multiplyF(fraction){
        const n = this.n * fraction.n;
        const d = this.d * fraction.d;
        const sign = this.SIGN.positive === fraction.SIGN.positive;
        const result = new Fraction(n,d,sign)

        return result;
    }

    multiplyI(integer){
        return this.multiplyF(new Fraction(integer, 1, positive(integer)))
    }

    divideF(fraction){
        return this.multiplyF(fraction.getInverse())
    }

    divideI(integer){
        return this.multiplyF(new Fraction(1, integer, positive(integer)))        
    }

    sign(){
        /** 
        * @summary
        *     Fraction.sign() returns a multiplier to adjust output methods.
        */
        if(this.SIGN.positive){
            return 1;
        } else {
            return -1;
        }
    }
    
    verify(){
        if( this.n != 0 && this.d === 0 ){
            throw new Error('DivideByZero: denominator cannot be zero unless numerator is also zero.')
        } else if( (this.SIGN.positive && this.SIGN.negative) || 
                   (!this.SIGN.positive && !this.SIGN.negative)  ){
            throw new Error('SignConflict: SIGN.postive must have the opposite value of SIGN.negative')
        } else {
            return true;
        }
    }

    reduce(){
        const result = this;
        const factors = { up: 0, down: 0 }
        let base = 0;
        
        result.setND(this.n, this.d)
        
        for( let i = 1 ; base < result.getD() || base < result.getN() ; i++){
            base = 2**i;
            factors.up = base + 1;
            factors.down = base - 1;

            if(result.d % factors.up === 0 && result.n % factors.up === 0){
                result.setND( result.getN()/factors.up, result.getD()/factors.up )
                i = 1;
            } else if(result.d % factors.down === 0 && result.n % factors.down === 0){
                result.setND( result.getN()/factors.down, result.getD()/factors.down )
                i = 1;
            }
        }

        return result;
    }
}

/**
 * @summary 
 *   positive() returns true if integer is positive, false if negative.
 */
function positive(integer){
    integer >= 0 ? true : false;
}

