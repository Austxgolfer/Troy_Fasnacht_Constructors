require = requrie("./letter.js");

//Constructor for selected word

var Word = function(ltr) {
    theWord = [ltr];

};

//function that returns the state of the word to be guessed from the letter contructors
Word.prototype.concant = function() {
    //call all the letter contructors and contantinate them together
};

//call the second function in the letter file and check all letters
Word.prototype.checkLtr = function(userLtr) {
    for (x=0; x<Letter.length; x++) {
        Letter[x].rtrnChar(userLtr)
    };
};