function ChoiceTitle(rightAnswers, names, subScore){

    BasicObject.call(this, rightAnswers, names, subScore);

    // this.rightAnswers = rightAnswers;
    // this.names = names;
    // this.subScore = subScore;
}

ChoiceTitle.prototype = Object.create(BasicObject.prototype);
ChoiceTitle.prototype.constructor = ChoiceTitle;


// ChoiceTitle.prototype.getChoiceStudentAnswer = function(name){
 ChoiceTitle.prototype.getStudentAnswer = function(name){

    var temporary = document.getElementsByName(name);
    var studentAnswer = [];
    for(var i=0; i<temporary.length; i++){
        studentAnswer.push(temporary[i].checked);
    }

    return  studentAnswer;
};


// ChoiceTitle.prototype.judgeChoice = function(rightAnswer,name){
ChoiceTitle.prototype.judgeAnswer = function(rightAnswer,name){

    var studentAnswer = this.getStudentAnswer(name);

    var judgelength = function(studentAnswer){
        var studentOptionNum = 0;
        for(var i=0; i<studentAnswer.length; i++){
            if(studentAnswer[i]){
                studentOptionNum ++;
            }
        }
        return studentOptionNum;
    };

    var temp = true;
    if(judgelength(studentAnswer) === rightAnswer.length){
        for(var i=0;i<rightAnswer.length; i++){
            if( studentAnswer[rightAnswer[i]] ){
                  temp = temp && true;
            }
            else{
                temp = temp && false;
            }
        }
    }else{
        temp = false;
    }

    return temp;
};

// ChoiceTitle.prototype.getChoiceScore = function(){
ChoiceTitle.prototype.getStudentScore = function(){

    var rightNum = 0;
    for(var i=0; i<this.names.length; i++){
        if(this.judgeAnswer(this.rightAnswers[i],this.names[i])){
          rightNum++;
        }
    }

    return rightNum * this.subScore;

};
