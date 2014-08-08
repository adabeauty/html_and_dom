function getGrade(){


   var firstGrade = getFirstGrade();
   var second = new choiceTitle([[1], [0]],["p2_1", "p2_2"], 10);
   var secondGrade = second.getScore();
//   var secondGrade = getSecondGrade();
   var third = new choiceTitle([[0,1,3], [0,1,2]],["p3_1", "p3_2"], 10);
   var thirdGrade = third.getScore();
//   var thirdGrade = getThirdGrade();
   var forth = new choiceTitle([1, 0],["p4_1", "p4_2"], 10);
   var forthScore = forth.getScore();
   var forthScore = getforthGrade();
   var fifthScore = getFifthGrade();
   var totalScore = firstGrade + secondGrade + thirdGrade + forthScore + fifthScore;


   var grade = document.getElementById("grade_output");
   if(judgeBasicInformation()){
     grade.innerHTML =  "得分：" + totalScore + "分";
     var name = document.getElementById("student_name");
     alert(name.value + "，您本次考试得分：" + totalScore +"分" );

   }
   else{
     alert("请输入您的基本信息！" );
   }

}

function judgeBasicInformation(){
  var temp = false;
  var class_num = document.getElementById("student_class");
  var number = document.getElementById("student_num");
  var name = document.getElementById("student_name");

  if(class_num.value && number.value && name.value)
    temp = true;
  return temp;
}


function getFirstGrade(){

  var firstScore = 0;
  var rightAnswer = ["统一建模语言", "封装性", "继承性", "多态性"];

  var temporary_0 = document.getElementsByName("p1_1");
  var temporary_1 = document.getElementsByName("p1_2_1");
  var temporary_2 = document.getElementsByName("p1_2_2");
  var temporary_3 = document.getElementsByName("p1_2_3");
  var studentAnswer = [];

  studentAnswer = [temporary_0[0], temporary_1[0], temporary_2[0], temporary_3[0]];

  if(studentAnswer[0].value === rightAnswer[0]){
    firstScore += 5;
  }

  var temp =[];

  for(var i=1; i<4; i++){
tag:    for(var j=1; j<4;j++){
      if(studentAnswer[i].value === rightAnswer[j] ){
        for(var m=0;m<temp.length;m++){
          if(studentAnswer[i].value === temp[m])
            break tag;
        }

        firstScore += 5;
        temp.push(studentAnswer[i].value);
      }

    }
 }
  return firstScore;
}

//
// function getSecondGrade(){
//
//   var secondGrade = 0;
//
//   var answer_p2_1 = document.getElementsByName("p2_1");
//   if(answer_p2_1[1].checked)
//     secondGrade += 10;
//
//   var answer_p2_2 = document.getElementsByName("p2_2");
//   if(answer_p2_2[0].checked)
//     secondGrade += 10;
//
//   return  secondGrade;
//
// }

// function getThirdGrade(){
//
//   var thirdScore = 0;
//
//   var answer_p3_1 = document.getElementsByName("p3_1");
//   var studentAnswer_1 = answer_p3_1[0].checked && answer_p3_1[1].checked && answer_p3_1[3].checked && (!answer_p3_1[2].checked);
//   if(studentAnswer_1)
//     thirdScore += 10;
//
//   var answer_p3_2 = document.getElementsByName("p3_2");
//   var studentAnswer_2 = answer_p3_2[0].checked && answer_p3_2[1].checked &&answer_p3_2[2].checked && (!answer_p3_2[3].checked);
//   if(studentAnswer_2)
//     thirdScore += 10;
//
//   return thirdScore;
//
// }
//
// function getforthGrade(){
//
//   var forthScore = 0;
//
//   var answer_p4_1 = document.getElementsByName("p4_1");
//   if(answer_p4_1[1].checked)
//     forthScore += 10;
//
//   var answer_p4_2 = document.getElementsByName("p4_2");
//   if(answer_p4_2[0].checked)
//     forthScore += 10;
//
//   return forthScore;
//
// }

function getFifthGrade(){

  var fifthScore = 0;
//  var rightAnswer;
  var rightAnswer="模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。";

  var studentAnswer = document.getElementById("p5_1");
  if(studentAnswer.value === rightAnswer)
    fifthScore += 20;
  return fifthScore;

}

/*抽出的类及其方法*/
function choiceTitle(rightAnswers, names, subScore){

  this.rightAnswers = rightAnswers;
  this.names = names;
  this.subScore = subScore;
}

choiceTitle.prototype.getChoiceStudentAnswer = function(name){


  var temporary = document.getElementsByName(name);
  var studentAnswer = [];
  for(var i=0; i<temporary.length; i++){
    studentAnswer.push(temporary[i].checked);
  }
//  var studentAnswer = temporary.checked;

  return  studentAnswer;
};

choiceTitle.prototype.judgeChoice = function(rightAnswer,name){

  var temp ;
  var studentAnswer = this.getChoiceStudentAnswer(name);
  for(var i=0;i<rightAnswer.length; i++){
    if( studentAnswer[rightAnswer[i]] )
      temp = true;
    else
      temp = false;
  }
  return temp;

};

choiceTitle.prototype.getScore = function(){

  var rightNum = 0;
  for(var i=0; i<this.names.length; i++){
    if(this.judgeChoice(this.rightAnswers[i],this.names[i])){
      rightNum++;
    }
  }

  var score = rightNum * this.subScore;
  return score;

};



function fillBlankTitle(rightAnswers,name){

  this.rightAnswers = rightAnswers;
  this.name = name;

}

fillBlankTitle.prototype.getFillingStudentAnswer = function(){

  var temporary = document.getElementsByName(name);
  var studentAnswer = temporary[0].value;

  return  studentAnswer;
};

fillBlankTitle.prototype.judgeChoice = function(rightAnswer, name){


      var studentAnswer = this.getFillingStudentAnswer(name);
      for(var i=0;i<rightAnswer.length; i++){
        if( studentAnswer[i] ===  rightAnswer[i])
          temp = true;
        else
          temp = false;
      }
      return temp;

  var temp ;
  var studentAnswer = this.getFillingStudentAnswer();

  if(studentAnswer === this.rightAnswers)
    temp = true;
  else
    temp = false;

  return temp;
};

fillBlankTitle.prototype.getBLankAnswer = function(){


};
