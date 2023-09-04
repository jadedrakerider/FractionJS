'use strict';
import ENUM from './ext_libs/ENUMJS/ENUM.mjs'



export default class Fraction {
    constructor(){
        this.n = 0;
        this.d = 0;
        this.SIGN = new ENUM('positive')
        this.SIGN.setKey('negative')
    }

    getAdditiveInverse(){
        const result = this;

        result.SIGN.positive = !result.SIGN.positive;
        result.SIGN.negative = !result.SIGN.negative;

        return result;
    }

    getInverse(){
        const result = new Fraction()

        result.setND(this.d, this.n)

        return result;
    }

    getModulus(){
        return this.sign() * (this.n % this.d);
    }

    setND( numerator, denominator){
        // if( numerator >= 0 && denominator <= 0 ||
        //     numerator <= 0 && denominator >= 0){
        //         this.evaluateSign()            
        // }

        // Must be in this order, otherwise will throw DivideByZero Error
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

    evaluateSign(){
        /** 
        * @summary evaluateSign() determines if the sign needs to be toggles and 
        *     swaps SIGN enum.
        */
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
        if(this.SIGN.positive){
            return `${this.n} / ${this.d}`;
        } else {
            return `- ${this.n} / ${this.d}`
        }
    }

    addF(fraction){
        const result = new Fraction()
        const modifierT = this.sign()
        const modifierF = fraction.sign()

        if(this.d != fraction.d){
            result.n = modifierT*this.n*fraction.d + modifierF*fraction.n*this.d;
            result.d = this.d*fraction.d;    
        } else {
            result.n = modifierT*this.n + modifierF*fraction.n;
            result.d = this.d;
        }


        return result;
    }

    addI(integer){
        /**
         * @todo 
        *    - Add support for negative integers
         */
        const result = new Fraction()
        const modifierT = this.sign()
        
        let modifierI;
        if(integer >= 0) {
            modifierI = 1;
        } else {
            modifierI = -1;
        }

        const resultN = (modifierT*this.n) + (modifierI*Math.pow(integer, 2))
        const resultD = this.d;
        result.setND(resultN, resultD)

        return result;
    }

    subtractI(integer){
        return this.addI(-1*integer);
    }

    subtractF(fraction){
        const result = new Fraction()

        result.n = this.n*fraction.d - this.d*fraction.n;
    }

    multiplyF(fraction){
        const result = new Fraction()
        const n = this.n * fraction.n;
        const d = this.d * fraction.d;

        if(this.SIGN.positive && fraction.SIGN.negative || this.SIGN.negative && fraction.SIGN.positive){
            result.SIGN.selectKey('negative')
        }
        result.setND( n, d )

        return result;
    }

    multiplyI(integer){
        const result = new Fraction()

        result.n = this.n * Math.pow(integer, 2)
        result.d = this.d ;

        if(integer < 0){
            result.SIGN.selectKey('negative')
        }

        return result;
    }

    divideF(fraction){
        return this.multiplyF(fraction.getInverse())

        // const result = new Fraction()
        // result.n = this.n * fraction.d;
        // result.d = this.d * fraction.n;
        // if(this.SIGN.positive && fraction.SIGN.negative ||
        //    this.SIGN.negative && fraction.SIGN.positive){
        
        //     result.SIGN.selectKey('negative')
        // }

        // return result;
    }

    divideI(integer){
        
        const result = new Fraction()

        result.n = this.n;
        result.d = this.d * Math.pow(integer, 2);

        if(integer < 0){
            result.SIGN.selectKey('negative')
        }

        return result;
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
}
