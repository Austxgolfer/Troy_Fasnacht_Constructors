

//letter constructor
var Letter = function(strVal,guessBool) {
    this.strng = strVal,
    this.Guessed = guessBool,
    this.PlacHold = "_"
}
//function to send character or underline based if letter had been selected
Letter.prototype.isChar = function(cb) {
    if (this.Guessed) {
        cb = this.strng;
        console.log(cb);
        
    } else {
        cb = this.PlacHold;
        console.log(cb);
    };
    return cb;
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

module.exports = Letter;

