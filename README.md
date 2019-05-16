# Psychic-Game-Bootstrap

How To Play:
  * The Psychic Game is a simple JavaScript game that allows you to guess the letter the computer chooses.
  * Choose a letter from A - Z on your keyboard and test your psycic ability to see if you can read a computers mind!

Live link: https://aeldenburg001.github.io/Psychic-Game-Bootstrap/

Overview:
In this assignment, you'll create one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by your JavaScript code.

Before You Begin:
* Create a new GitHub repo called Word Guess Game or Psychic-Game, in accordance with the assignment you choose to complete. Then, clone it to your computer.
* Inside your local git repository, create an index.html.
* While still in your local git repo, create a directory called assets.
* cd your way into the assets folder, then make three additional folders: javascript, css and images.
* In the javascript folder, make a file called game.js. Use the src attribute of the script tag to link to this file, rather than embedding the code directly in your HTML document.
* In the css folder, make a file called style.css.
* Also in the css folder, make a file called reset.css. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
* In the images folder, save whatever images you plan on using.

Psychic Game (Basic):
Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
* Guess what letter I'm thinking of
* Wins: (# of times the user has guessed the letter correctly)
* Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
* Guesses Left: (# of guesses left. This will update)
* Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
* When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
* When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

IMPORTANT:
Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. Always code one piece at a time!

Pseudocode your program and break the app down into tiny, manageable fragments. This will make the coding process much less frustrating and a veritable Mach number faster. Otherwise, you'll be chipping away at a giant chunk of abstraction for way too many hours.

The ability to solve a large problem by treating it as a set of smaller ones is the hallmark of a strong programmer. Best start adapting this into your development routine now, to better prepare for your more complex future projects.
Remember:
* Split the whole program into many distinct, pseudocoded problems.
* Focus on one of the smaller problems and solve it.
* Only when you solve one problem should you then move onto your next problem.

When you encounter bugs (and we all do), console.log will become your best friend. Regularly check your console to make sure your app is spitting out the right values.

As a more advanced—but more powerful—alternative, feel free to experiment with the Chrome DevTools Debugger.
