function CompareNumber(){}
CompareNumber.prototype.compare=function(answers,inputs){
    var mark;
    var count_A=0;
    var count_B=0;
    for(var i=0;i<answers.length;i++){
        if(answers[i]==inputs[i]){
             count_A+=1;
        }
    }
    for(var i=0;i<answers.length;i++){
        for(var j=0;j<inputs.length;j++){
            if(answers[i]==inputs[j]){
                count_B+=1;
            }
        }
    }
    mark=count_A+'A'+(count_B-count_A)+'B';
    return mark;
}