
module.exports = class ENUM {

    constructor( keyStr ) { // { 'genus': boolean }
        this[keyStr] = true;
    }

    setKey( keyStr ){
        this[keyStr] = false;
    }

    setKeys( keyStrArray ){
        keyStrArray.forEach( (string) => {
            this[string] = false;
        } )
    }

    selectKey( keyStr ){
        const keys = Object.keys(this);

        if(this[keyStr] != true && this[keyStr] != false){
            throw new Error("InvalidKey Error: specified key is not present")
        } else {
            keys.forEach( (key) => {
                this[key] = false;
            } )

            this[keyStr] = true;
        }
        
    }

    toString(){
        let result;
        const keys = Object.keys(this)

        keys.forEach(key => {
            result += ` { ${key}: ${this[key]} } `
        })
        
        return result;
    }

}
