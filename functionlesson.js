// ------------function-----------

function calculateage(birthyear){
    return 2022-birthyear;
}

function yearUntilRetirement(year,fullname){
    var age=calculateage(year);
    var retirement=60-age;
    if(retirement>0){
        console.log(fullname + ' retire in ' + retirement);
    }
    else{
        console.log(fullname + '  already retire .');
    }
}

yearUntilRetirement(1999,'ChawSu');
yearUntilRetirement(1995,'Ko Ko');
yearUntilRetirement(1962,'Mg Mg');


// var whatdoyoudo= function(job,fullname){
//     switch(job){
//         case 'teacher' : 
//         case 'designer' :
//         case 'engineer' :
//             return fullname + ' is ' + job;
//         default : 
//             return fullname + ' is something job.';
//     }
// }

// console.log(whatdoyoudo('designer','Ma Ma'));
// console.log(whatdoyoudo('doctor','Su Su'));
// console.log(whatdoyoudo('teacher','MaHla'));


// -----------IIFE--------
// Immediatly Invoke Function Expression
// ()();
(function(){
    console.log("Hey Now")
})(); // call itself
