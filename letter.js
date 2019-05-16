

//letter constructor
var Letter = function(strVal,guessBool) {
    this.strng = strVal,
    this.Guessed = guessBool,
    this.PlacHold = "_"
}
//function to send character or underline based if letter had been selected
Letter.prototype.isChar = function() {
    if (this.Guessed) {
        console.log(this.strng);
    } else {console.log(this.PlacHold);
    };
};

//function to check if letter matches the constructor
Letter.prototype.rtrnChar = function(guess) {
    if (this.strng === guess) {
        this.Guessed = true;
        this.isChar();
    } else {this.Guessed = false;
        this.isChar();
    };
};

var word1 = new Letter("b",false);
var word2 = new Letter("i",false);
var word3 = new Letter("g",true);


word1.isChar();

word1.rtrnChar("b");

