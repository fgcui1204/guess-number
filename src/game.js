/**
 * Created by fgcui on 14-8-22.
 */
function Game(guess) {
    this.guess = guess;
    this.answer;
    this.number;
}
Game.prototype.start = function () {
    this.answer = this.guess.generator.isNumbers();
    this.number = 6;
    var str = "welcome to you";
    return str;
}
Game.prototype.judge = function (input) {
    if(input.length != 4){
        return false;
    }
    for (var i = 0; i < input.length; i++) {
        var cha = input.charAt(i);
        var sub = input.substring(0,i)+input.substring(i+1);
        if (sub.indexOf(cha)!=-1) {
            console.log("有重复");
            return false;
        };
    };
    return true;
}
Game.prototype.judgeNumber = function (input){
    var isNumber=/^\d{4}$/;
    return isNumber.test(input);
}
Game.prototype.judgeAnswer = function (input){
    var flag=this.guess.guessnumber(input);
    console.log(this.answer);
    if(this.answer == input){
        return "Congratulations";
    }else{
        return flag;
    }
}