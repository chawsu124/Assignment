function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ' Please explain me about UI and UX');
        }
    }
    else if(job === 'teacher'){
        return function(name){
            console.log(name + ' What subject do you teach');
        }
    }
    else{
        return function(name){
            console.log(name + ' What do you do? ');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Su Su');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Ma Ma');

interviewQuestion('Doctor')('Kyaw Kyaw');