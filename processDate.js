function getGrade(){

    var totalScore = getTotalScore();

    var grade = document.getElementById("grade_output");
    var getGrade = document.getElementById("get_grade");
    if(judgeBasicInformation(["class", "number", "name"],["student_class", "student_num", "student_name"])){
        grade.innerHTML = totalScore + "分";
        getGrade.classList.add("text-danger");
     }
     else{
        alert("请输入您的基本信息！" );
     }
}

function getTotalScore(){

    var first_1 = new OrderBlankTitle(["统一建模语言"], ["p1_1"], 5);
    var firstGrade_1 = first_1.getStudentScore();
    var first_2 = new  UnOrderBlankTitle([ "封装性", "继承性", "多态性"], ["p1_2_1", "p1_2_2", "p1_2_3"], 5);
    var firstGrade_2 = first_2.getStudentScore();
    var firstGrade = firstGrade_1 + firstGrade_2;


    var second = new ChoiceTitle([[1], [0]],["p2_1", "p2_2"], 10);
    var secondGrade = second.getStudentScore();

    var third = new ChoiceTitle([[0,1,3], [0,1,2]],["p3_1", "p3_2"], 10);
    var thirdGrade = third.getStudentScore();

    var forth = new ChoiceTitle([[1], [0]],["p4_1", "p4_2"], 10);
    var forthScore = forth.getStudentScore();

    var fifth = new OrderBlankTitle(["模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。"], ["p5_1"], 20);
    var fifthScore = fifth.getStudentScore();

    var totalScore = firstGrade + secondGrade + thirdGrade + forthScore + fifthScore;

    return totalScore;
}

function judgeBasicInformation(divIds, inputIds){
    var temp = true;
    for(var i=0; i<divIds.length; i++){
        var inputId = document.getElementById(inputIds[i]);
        var divId = document.getElementById(divIds[i]);
        if(inputId.value){
            divId.classList.remove("has-error");
            temp = temp && true;
        }else{
            divId.classList.add("has-error");
            temp = temp && false;
        }
    }
    return temp;
}
