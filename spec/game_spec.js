/**
 * Created by fgcui on 14-8-22.
 */
describe('game_spec', function () {
    var input;
    var answerGen = new AnswerGenerrator();
    var compare = new CompareNumber();
    var guess=new Guess(answerGen,compare);
    beforeEach(function() {
         input=['1234','2345','5678'];
         spyOn(AnswerGenerrator,'isNumbers').and.returnValue('1234');
    });

    it('game is start', function () {
        var game = new Game(guess);
        var welcomeString = game.start();
        expect(answerGen.isNumbers().calls.count()).toEqual(1);
        expect(welcomeString).toEqual('welcome to you');
        expect(game.number).toEqual(6);
    });
});
