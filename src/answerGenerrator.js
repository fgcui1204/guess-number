/**
 * Created by fgcui on 14-8-21.
 */
function AnswerGenerrator(){

}
AnswerGenerrator.prototype.isNumbers=function(){
    var answer='';
    var answerElement;
    for(var i=0;i<4;i++){
        answerElement=Math.floor(Math.random()*10).toString();
        while(answer.indexOf(answerElement)!=-1){
            answerElement=Math.floor(Math.random()*10).toString()
        }
        answer+=answerElement;
    }
    return answer;
}

