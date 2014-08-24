function Guess(generator, compares) {
    this.generator = generator;
    this.compares = compares;
};
Guess.prototype.guessnumber = function (input) {
    var answer = this.generator.isNumbers();
    return this.compares.compare(answer, input);

}