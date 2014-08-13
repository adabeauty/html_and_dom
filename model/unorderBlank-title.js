function UnOrderBlankTitle(rightAnswers, names, subScore){

    BasicObject.call(this, rightAnswers, names, subScore);

}

UnOrderBlankTitle.prototype = Object.create(BasicObject.prototype);
UnOrderBlankTitle.prototype.constructor = UnOrderBlankTitle;

UnOrderBlankTitle.prototype.getStudentAnswer = function(){

    var everyStudentAnswer;
    var studentAnswer = [];
    for(var i=0; i<this.names.length; i++){
//        everyStudentAnswer = document.getElementsByName(this.names[i]);
        everyStudentAnswer = $('#' + this.names[i]);
        studentAnswer.push(everyStudentAnswer[0].value);
    }

    return  studentAnswer;
};

UnOrderBlankTitle.prototype.judgeAnswer = function(){

      var studentAnswer = this.getStudentAnswer();

      var temporary = this.rightAnswers;
      var num = 0;
      for(var i=0; i<studentAnswer.length; i++){
          for(var j=0; j<this.rightAnswers.length; j++){
              var judge =(studentAnswer[i] === this.rightAnswers[j]);
              if(judge){
                  num++;
                  temporary[j] = "1";
              }
          }
      }

      return num;

};

UnOrderBlankTitle.prototype.getStudentScore = function(){

    var rightNum = this.judgeAnswer();
    var score = rightNum * this.subScore;
    return score;
};
