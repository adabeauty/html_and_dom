function OrderBlankTitle(rightAnswers, names, subScore){

//    BasicObject.call(this, rightAnswers, names, subScore);
    BasicObject.call(this, rightAnswers, names, subScore);
    // this.rightAnswers = rightAnswers;
    // this.names = names;
    // this.subScore = subScore;
}

OrderBlankTitle.prototype = Object.create(BasicObject.prototype);
OrderBlankTitle.prototype.constructor = OrderBlankTitle;
// ChoiceTitle.prototype = Object.create(BasicObject.prototype);
// ChoiceTitle.prototype.constructor = ChoiceTitle;

OrderBlankTitle.prototype.getStudentAnswer = function(name){

    var temporary = document.getElementsByName(name);
    var studentAnswer = temporary[0].value;

    return  studentAnswer;
};

OrderBlankTitle.prototype.judgeAnswer = function(rightAnswer, name){

      var studentAnswer = this.getStudentAnswer(name);
      if( studentAnswer ===  rightAnswer){
          temp = true;
      }
      else{
          temp = false;
      }
      return temp;
};

OrderBlankTitle.prototype.getStudentScore = function(){

    var rightNum = 0;
    for(var i=0; i<this.names.length; i++){
        if(this.judgeAnswer(this.rightAnswers[i],this.names[i])){
          rightNum++;
        }
    }
    return rightNum * this.subScore;
};
