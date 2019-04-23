var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

var img = new Image();
			img.src = "https://www.monsterchildren.com/wp-content/uploads/2018/04/monster-children-psychic-1068x571.jpg";
			img.onclick = function() {
				window.location.href = "https://www.monsterchildren.com/wp-content/uploads/2018/04/monster-children-psychic-1068x571.jpg";
			};

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 9;
           guessChoices = [];
       }

       if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }

       if (numGuesses === 0) {

       numGuesses = 9;
       losses ++;
       guessChoices = [];

       
   }

   var html = 
   "<h1>The Psychic Game</h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<li>Wins: " + wins + "</li>" +
   "<li>Losses: " + losses + "</li>" +
   "<li>Guesses Left: " + numGuesses + "</li>" +
   "<li>Your Guesses so far: " + guessChoices.join(", ") + "</li>";

   document.querySelector("#game").innerHTML = html;

   
   }
};