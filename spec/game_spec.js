/**
 * Created by fgcui on 14-8-22.
 */
describe('game_spec', function () {
    var input;
    var answerGen = new AnswerGenerrator();
    var compare = new CompareNumber();
    var guess=new Guess(answerGen,compare);
    beforeEach(function() {
         input=['1234','2245','56780','1a21','3333'];
         spyOn(answerGen,'isNumbers').and.returnValue('1234');
    });

    it('game is start', function () {
        var game = new Game(guess);
        var welcomeString = game.start();
        //expect(answerGen.isNumbers.calls.count()).toEqual(1);
        expect(welcomeString).toEqual('welcome to you');
        expect(game.number).toEqual(6);
    });
    it('input is not repeat',function(){
        var game = new Game(guess);
        var welcomeString = game.start();
        expect(game.judge(input[0])).toEqual(true);
        expect(game.judge(input[1])).toEqual(false);
    });
    it('input is number',function(){
        var game = new Game(guess);
        var welcomeString = game.start();
        expect(game.judgeNumber(input[0])).toEqual(true);
        expect(game.judgeNumber(input[3])).toEqual(false);
    });
    it('the length of input is 4',function(){
        var game = new Game(guess);
        var welcomeString = game.start();
        expect(game.judgeNumber(input[0])).toEqual(true);
        expect(game.judgeNumber(input[2])).toEqual(false);
    });
    it('input is equal to answer', function(){
        var game = new Game(guess);
        var welcomeString = game.start();
        var answer = game.judgeAnswer(input[0]);
        expect(answer).toEqual('Congratulations');

    });
    it('input is not equal to answer', function(){
        spyOn(compare,'compare').and.returnValue('1A2B');
        var game = new Game(guess);
        var welcomeString = game.start();
        var answer = game.judgeAnswer(input[1]);
        expect(answer).toEqual('1A2B');
    });
    it('the count will substract', function(){
        var game = new Game(guess);
        var welcomeString = game.start();
        var number_5=game.subNumber();
        var number_4=game.subNumber();
        var number_3=game.subNumber();
        var number_2=game.subNumber();
        var number_1=game.subNumber();
        var number_0=game.subNumber();
        expect(number_5).toEqual(5);
        expect(number_1).toEqual(1);
        expect(number_0).toEqual('GameOver');
    });
});
