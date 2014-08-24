describe('numberGame', function () {
    var answers;
    var inputs;
    it('should print correct text', function () {
        answers = [1,2,3,4];
        inputs = [5,6,7,8];
        var numberGame=new CompareNumber();
        var tips=numberGame.compare(answers,inputs);
        expect(tips).toBe('0A0B');
    });
    it('should print correct text', function () {
        answers = [1,2,3,4];
        inputs = [1,2,3,4];
        var numberGame=new CompareNumber();
        var tips=numberGame.compare(answers,inputs);
        expect(tips).toBe('4A0B');
    });
    it('should print correct text', function () {
        answers = [1,2,3,4];
        inputs = [2,1,4,3];
        var numberGame=new CompareNumber();
        var tips=numberGame.compare(answers,inputs);
        expect(tips).toBe('0A4B');
    });
    it('should print correct text', function () {
        answers = [1,2,3,4];
        inputs = [1,3,2,4];
        var numberGame=new CompareNumber();
        var tips=numberGame.compare(answers,inputs);
        expect(tips).toBe('2A2B');
    });
    it('should print correct text', function () {
        answers = [1,2,3,4];
        inputs = [1,2,5,3];
        var numberGame=new CompareNumber();
        var tips=numberGame.compare(answers,inputs);
        expect(tips).toBe('2A1B');
    });
});
