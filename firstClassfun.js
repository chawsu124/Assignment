var year = [1990,1987,2000,1945,1995];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i=0;i<arr.lenght;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2022 - el;
}

function isfullage(el){
    return 18 <= el; 
}

var ages = arrayCalc(year,calculateAge);
console.log(ages);

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return 206.9 - (0.67 * el);
    }
    else{
        return -1;
    }
}

var heartRate = arrayCalc(ages,maxHeartRate);
console.log(heartRate);