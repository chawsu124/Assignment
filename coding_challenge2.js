function tipCalculator(bill){
    var percentage;
    if(bill<50000){
        percentage = 0.2;
    }
    else if(bill>=50000 && bill<100000){
        percentage = 0.15;
    }
    else{
        percentage = 0.1;
    }
    return percentage * bill;
}

var bill = [35000,72000,120000];
var tip = [tipCalculator(bill[0]),tipCalculator(bill[1]),tipCalculator(bill[2])];
console.log(tip);

var finalValue = [bill[0] + tip[0],bill[1] + tip[1],bill[2] + tip[2]];
console.log(finalValue);

