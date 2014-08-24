/**
 * Created by fgcui on 14-8-22.
 */
describe('game_spec', function () {
    var input;
    var answerGen = new AnswerGenerrator();
    var compare = new CompareNumber();
    var guess=new Guess(answerGen,compare);
    beforeEach(function() {
         input=['1234','2245','56780','1a21'];
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
});
