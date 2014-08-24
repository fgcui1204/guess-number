/**
 * Created by fgcui on 14-8-21.
 */
describe('numberGame', function () {
    var answers = '';

    it('it should is number', function () {
        var answerGen = new AnswerGenerrator();
        answers = answerGen.isNumbers();
        expect(parseInt(answers) == answers).toBe(true);
    });
    it('it should length 4', function () {
        var answerGen = new AnswerGenerrator();
        answers = answerGen.isNumbers();
        expect(answers.length == 4).toBe(true);
    });
    it('it should have different number', function () {
        var answerGen = new AnswerGenerrator();
        answers = answerGen.isNumbers();
        var count = 0;
        for (var i = 0; i < answers.length; i++) {
            if (answers.indexOf(answers.charAt(i)) != -1) {
                count += 1;
            }
        }
        expect(count).toBe(4);
    });
    it('it should have random number', function () {
        var answerGen = new AnswerGenerrator();
        var answers1 = answerGen.isNumbers();
        var answers2 = answerGen.isNumbers();
        var flag = true;
        if (answers1 == answers2) {
            flag = false;
        }
        expect(flag).toBe(true);
    });
});

