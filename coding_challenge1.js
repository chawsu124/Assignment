var scoreMg = (55 + 20 + 80) / 3;
var scoreAung = (60 + 25 + 50) / 3;
var scoreHla = (80 + 10 + 70) / 3;

console.log(scoreMg);
console.log(scoreAung);
console.log(scoreHla);

if(scoreMg>scoreAung && scoreMg>scoreHla){
    console.log('Mg Mg team is win ' + scoreMg + 'points');
}
else if(scoreAung>scoreMg && scoreAung>scoreHla){
    console.log('Aung Aung team is win ' + scoreAung + 'points');
}
else if(scoreHla>scoreMg && scoreHla>scoreAung){
    console.log('Hla Hla team is win ' + scoreHla + 'points');
}
else 
{
    console.log('There is a draw.');
}