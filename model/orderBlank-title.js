function OrderBlankTitle(rightAnswers, names, subScore){

    BasicObject.call(this, rightAnswers, names, subScore);

}

OrderBlankTitle.prototype = Object.create(BasicObject.prototype);
OrderBlankTitle.prototype.constructor = OrderBlankTitle;


OrderBlankTitle.prototype.getStudentAnswer = function(cunrrentName){

    // var studentAnswer = $("input[name="+cunrrentName+"]");
    var studentAnswer = $('#'+ cunrrentName);

    return  studentAnswer;
};

OrderBlankTitle.prototype.judgeAnswer = function(rightAnswer, name){

      var studentAnswer = this.getStudentAnswer(name);
      if( studentAnswer[0].value ===  rightAnswer){
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
