$(document).ready(function () {
    var answer = new AnswerGenerrator();
    var compare = new CompareNumber();
    var guess = new Guess(answer, compare);
    var game = new Game(guess);
    $('.gameArea').hide();


    $('.startBtn').on('click', function () {
        startGame(game);
    });
    $('.submitBtn').on('click', function () {
        onSubmit(game);
    });

});
function startGame(game) {
    var welcomeString = game.start();
    alert(welcomeString);
    $('.startBtn').hide();
    $('.gameArea').show();
}
function onSubmit(game) {
    var input = $('#input')[0].value;
    var noRepeat = game.judge(input);
    var isNumber = game.judgeNumber(input);
    if (!isNumber) {
        alert("请输入数字！");
    } else if (!noRepeat) {
        alert("请输入4位不重复的数字！")
    } else {
        var answer = game.judgeAnswer(input);
        if (answer == 'Congratulations') {
            alert("恭喜您，挑战成功！");
            $('.gameArea').hide();
            $('#input').val("");
            $('.startBtn').show();
        } else {
            fail(game, answer);
        }
    }
}
function fail(game, answer) {
    var number = game.subNumber();
    if (number != "GameOver") {
        alert("您的答案是" + answer + ",您还有" + number + "次机会");
    } else {
        alert("您的答案是" + answer + "游戏结束，挑战失败！");
        $('.gameArea').hide();
        $('#input').val("");
        $('.startBtn').show();
    }
}
