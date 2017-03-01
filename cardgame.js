//Language Used: JavaScript
//Command Used: node cardgame.js
//Requires node.js

//Package required for command line interaction
var inquirer = require('inquirer');

//Initial starting function
var start = function() {
   inquirer.prompt({
     name: "options",
     type: "list",
     message: "Please select the number of players.",
     choices: ["2", "3", "4"]
   }).then(function(answer) {
       game(answer.options)
    })
}

// Global Variables
var playerA = 0;
var playerB = 0;
var playerC = 0;
var playerD = 0;
var playerACardDraw = 0;
var playerBCardDraw = 0;
var playerScores = [0, 0, 0, 0];
var cardDraw = [-2,-2,-2,-2];

//Player function
var game = function(numPlayers){
  var usedDraws = [];
  for (var i = 0; i < numPlayers; i++) {

    cardDraw[i] = draw(i);
    console.log(cardDraw[i]);
  }
  winner();  
}

//Card Draw Function
var draw = function(i){
  var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, "Joke's on you, Bats!", "Come on Bats, laugh it up", "Hello BatBreath!", "Makes you want to laugh, doesn't it?"];
  chosenCard = cards[Math.floor(Math.random() * cards.length)];
  console.log("Player  " + (i+1) +"'s card: " + chosenCard);
  console.log("--------------------------------");
  if (typeof(chosenCard) === 'string') {
    chosenCard = -1;
  }
  return chosenCard;
};

//Winner Function: Deals with all scoring outcomes
var winner = function(){
  var champion = cardDraw.indexOf(Math.max(...cardDraw));
  
  //If all players draw a penalty card, non-existant fifth player 'wins'
  if (cardDraw[0] == -1 && cardDraw[1] == -1 && cardDraw[2] == -1 && cardDraw[3] == -1) {
    champion = 5;
  }
  //If all players tie, non-existant fifth player 'wins'
  if (cardDraw[0] == cardDraw[1] == cardDraw[2] == cardDraw[3]) {
    champion = 5;
  }
  //Handles logic for receiving winning score and penalty card
  for (var i = 0; i < cardDraw.length; i++) {
    if (i==champion) {
      playerScores[i]+=2;
    } else if (cardDraw[i] == -1){
      playerScores[i]--;
    }
  }
  //Handles winner of total match when score is 21 or greater
  for (var i = 0; i < playerScores.length; i++) {
    if (playerScores[i] > 20) {
      console.log("Winner Winner Chicken Dinner: Player with " + playerScores[i] + " points!");
    }
  }
  
console.log("Current Score: Player 1-" + playerScores[0] + "|| Player 2-" + playerScores[1] + "|| Player 3-" + playerScores[2] + "|| Player 4-" + playerScores[3]);

start();
}

start();