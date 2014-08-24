$(document).ready(function(){
    var answer=new AnswerGenerrator();
    var compare=new CompareNumber();
    var guess=new Guess(answer,compare);
    var game=new Game(guess);
    $('.gameArea').hide();
    var welcomeString =game.start();
    alert(welcomeString);
    $('.startBtn').on('click',startGame);


});
function startGame(){

    $('.startBtn').hide();
    $('.gameArea').show();
}