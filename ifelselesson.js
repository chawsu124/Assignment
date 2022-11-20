var weightMg=75;//kg
var weightKyaw=50;//kg

var heightMg=1.6;//m
var heightKyaw=1;//m

var massOfMg=weightMg/heightMg*2;
var massOfKyaw=weightKyaw/heightKyaw*2;

console.log(massOfMg);
console.log(massOfKyaw);

if(massOfMg>massOfKyaw){
    console.log("Mass of Mg Mg is more greater.");
}
else{
    console.log("Mass of Kyaw Kyaw is more greater.");
}