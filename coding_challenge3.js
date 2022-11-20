var mgmg = {
    fullname : 'Mg Mg',
    mass : 92,
    height : 1.6,
    calculateBMI : function(){
        this.bmi = this.mass / this.height * this.height;
        return this.bmi;
    }
}
var koko = {
    fullname : 'Ko Ko',
    mass : 98,
    height : 1.6,
    calculateBMI : function(){
        this.bmi = this.mass / this.height * this.height;
        return this.bmi;
    }
}

mgmg.calculateBMI();
console.log(mgmg.calculateBMI());
console.log(mgmg);

koko.calculateBMI();
console.log(koko.calculateBMI());
console.log(koko);

if(mgmg.bmi > koko.bmi){
    console.log(mgmg.fullname + ' is higher than ' + koko.fullname);
}
else if(koko.bmi > mgmg.bmi){
    console.log(koko.fullname + ' is higher than ' + mgmg.fullname);
}
else {
    console.log('They have the same bmi.')
}