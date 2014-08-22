/**
 * Created by fgcui on 14-8-21.
 */
describe('guess', function () {
    var inputs='1234';
    it('guess number is ok', function () {
        var answerGen = new AnswerGenerrator();
        spyOn(answerGen,'isNumbers').and.returnValue('1234');
        var compare=new CompareNumber();
        var guess=new Guess(answerGen,compare);
        var flag=guess.guessnumber(inputs);
        var flag2=compare.compare(answerGen.isNumbers(),inputs);

        expect(flag).toBe(flag2);
    });
});