var familyOne = {
    fullname : 'Aung Aung',
    bill : [25000,80500,150000,40000,50000],
    calculateTip : function(){
        this.tip = [];
        this.finalValue = [];
        for(var i=0;i<this.bill.length;i++){
            var percentage;
            var eachBill = this.bill[i];
            if(eachBill < 30000){
                percentage = 0.2;
            }
            else if(eachBill >= 30000 && eachBill < 100000){
                percentage = 0.5;
            }
            else{
                percentage = 0.1
            }
            this.tip[i] = percentage * eachBill;
            this.finalValue[i] = eachBill + eachBill * percentage;
        }  
    }
}
var familyTwo = {
    fullname : 'Ko Ko',
    bill : [15000,80000,200000,50000,41000],
    calculateTip : function(){
        this.tip = [];
        this.finalValue = [];
        for(var i=0;i<this.bill.length;i++){
            var percentage;
            var eachBill = this.bill[i];
            if(eachBill < 30000){
                percentage = 0.2;
            }
            else if(eachBill >= 30000 && eachBill < 100000){
                percentage = 0.5;
            }
            else{
                percentage = 0.1
            }
            this.tip[i] = percentage * eachBill;
            this.finalValue[i] = eachBill + eachBill * percentage;
        }  
    }
}

familyOne.calculateTip();
console.log(familyOne);

familyTwo.calculateTip();
console.log(familyTwo);

function calculateAverage(tip){
    var sum = 0;
    for(var i=0;i<tip.length;i++){
        sum = sum + tip[i];
    }
    return sum / tip.length;
}

familyOne.average = calculateAverage(familyOne.tip);
familyTwo.average = calculateAverage(familyTwo.tip);

console.log(familyOne,familyTwo);

if(familyOne.average > familyTwo.average){
    console.log(familyOne.fullname + ' family pay higher tip with an average ' + familyOne.average);
}
else if(familyTwo.average > familyOne.average){
    console.log(familyTwo.fullname + ' family pay higher tip with an average ' + familyTwo.average);
}
else {
    console.log('They pay the same tip.');
}
