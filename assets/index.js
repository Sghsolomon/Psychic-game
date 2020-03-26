



var wins = 0;
var loses = 0;
var guesses = 8;

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];




document.onkeyup = function(){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    var computerGuess =   letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
    if(guesses == 0){
        guesses +=  8;
    }
    if(userGuess){
        guesses--;
        document.getElementById('guess').innerHTML =  guesses;
    }
    

    if(userGuess == computerGuess){
        wins++;
        guesses = 8;
        document.getElementById('win').innerHTML =  wins;
    }  if(userGuess !== computerGuess && guesses == 0){
        loses++;
        document.getElementById('lose').innerHTML =  loses;
    }
    document.getElementById('key').innerHTML  +=  ', '+ userGuess;

}