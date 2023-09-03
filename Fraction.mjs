'use strict';
import * from './ext_libs/ENUMJS/ENUM.mjs'



export default class Fraction(){
    constructor(){
        this.n = numerator;
        this.d = denominator;
        this.sign = new Enum()
        this.sign.pushTypeArray( ENUMvalues )
    }

    setND( numerator, denominator){
        #setNumerator(numerator)
        #setDenominator(denominator)
    }

    #setNumerator( numerator ){
        this.n = numerator;
    }

    #setDenominator( denominator ){
        this.d = denominator;
    }

    toInteger(){
        return 1.0*this.n/this.d;
    }

    toString(){
        return `${this.n} / ${this.d}`;
    }

    toInverse(){
        const result = new Fraction()
        result.setND(this.d, this.n)

        return result;
    }
    
    #verify(){}
}



class PrimeFinder {
    constructor(){
        
    }
}
