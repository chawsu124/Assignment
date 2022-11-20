function Question(question,answer,correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for(var i=0;i < this.answer.length;i++){
        console.log(i + ':' + this.answer[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct)
    {
        console.log('Correct Answer.');
    }
    else{
        console.log('Wrong Answer! Try again.');
    }
}

var q1 = new Question('Is javascript the collest programming language in the world?',['yes','no'],0);
var q2 = new Question('What is the name of this js course teacher',['Mg Mg','Su Thet','Thuyein Soe','Win Htut'],2);
var q3 = new Question('How do you feel by teaching JavaScript?',['Boring','Hard','Fun'],2);

var questions = [q1,q2,q3];
var numberOfQuestion = Math.floor(Math.random() * questions.length);

questions[numberOfQuestion].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer!'));

questions[numberOfQuestion].checkAnswer(answer);
