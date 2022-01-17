class araba{
    constructor(model, yas, renk){
        this.yas = yas;
        this.renk = renk;
        this.model = model;
    }
    bilgileriver(){
        return `arabanın yaşı: ${this.yas} arabanın rengi ${this.renk} arabanın modeli ${this.model}`;
    }
}
var fiat = new araba("Fiat", "15", "mavi");
console.log(fiat.bilgileriver());
var audi = new araba("audi" , "4" , "uzaygrisi")
console.log(audi.bilgileriver());
