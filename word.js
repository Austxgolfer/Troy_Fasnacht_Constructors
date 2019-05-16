 var object = require("./letter.js");

//Constructor for selected word

var Word = function(object) {
    this.theWord = [];
    this.ArrUpdate = function(obj){
        this.theWord.push(obj);
    }
};

//function that returns the state of the word to be guessed from the letter contructors
Word.prototype.concant = function() {
    //call all the letter contructors and concantinate them together
};

//call the second function in the letter file and check all letters
Word.prototype.checkLtr = function(userLtr) {
    for (x=0; x<Letter.length; x++) {
        Letter[x].rtrnChar(userLtr)
    };
};

var letter1 = new object("b",true);
var letter2 = new object("i",false);
var letter3 = new object("g",false);

var workingWord = new Word();
workingWord.ArrUpdate(letter1);
workingWord.ArrUpdate(letter2);
workingWord.ArrUpdate(letter3);
console.log("test",workingWord);