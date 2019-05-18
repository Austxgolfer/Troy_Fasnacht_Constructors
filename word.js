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
    var dispWord = "";
   
    for (x=0;x<this.theWord.length; x++){
        if (this.theWord[x].Guessed) {
            dispWord = dispWord + this.theWord[x].strng;}
        else { dispWord = dispWord + this.theWord[x].PlacHold};    
    }
    console.log(dispWord);  
        
    };


//call the second function in the letter file and check all letters
Word.prototype.checkLtr = function(userLtr) {
    for (x=0;x<this.theWord.length; x++) {
        this.theWord[x].rtrnChar(userLtr)
    };
};
//testing for functions not needed in final version
var letter1 = new object("b",true);
var letter2 = new object("i",false);
var letter3 = new object("g",false);

var workingWord = new Word();
workingWord.ArrUpdate(letter1);
workingWord.ArrUpdate(letter2);
workingWord.ArrUpdate(letter3);
console.log("test",workingWord.theWord[0].strng);
 workingWord.concant();
 workingWord.checkLtr("g");
 workingWord.concant();