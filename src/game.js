/**
 * Created by fgcui on 14-8-22.
 */
function Game(guess){
    this.guess = guess;
    this.answer;
    this.number;
}
Game.prototype.start=function(){
    this.answer = this.guess.generator;
    this.number=6;
    var str="welcome to you";
    return str;
}