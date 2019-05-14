

//letter constructor
var Letter= function(strVal,guessBool) {
    strng = strVal,
    Guessed = guessBool,
    PlacHold = "_"
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
        isChar();
    } else {this.Guessed = false;
        isChar();
    };
};