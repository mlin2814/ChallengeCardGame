//Language Used: JavaScript
//Command Used: node cardgame.js

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
       two(answer.options)
    })
}

var playerA = 0;
var playerB = 0;
var playerACardDraw = 0;
var playerBCardDraw = 0;
var playerScores = [0, 0, 0, 0];
var cardDraw = [-2,-2,-2,-2];

//Two Player function
var two = function(numPlayers){
  var usedDraws = [];
  for (var i = 0; i < numPlayers; i++) {

    cardDraw[i] = draw(i);
    console.log(cardDraw[i]);
    //Function to handle Player A draw
    // inquirer.prompt({
    //    name: "draw",
    //    type: "list",
    //    message: "Player " + (i+1) +", please draw a card",
    //    choices: ["Yes"]
    //  }).then(function(answer) {
    //   console.log("asod;kjw");
    //      //if (answer.draw == "Yes"){
    //       
    //      //}
    //   })
    
  }

  console.log("Current Score: Player A-" + playerA + "|| Player B-" + playerB);
  winner();
  
}

  // console.log(" ");

  // //Function to handle Player B draw
  // inquirer.prompt({
  //    name: "draw",
  //    type: "list",
  //    message: "Player B, please draw a card",
  //    choices: ["Yes"]
  //  }).then(function(answer) {
  //      if (answer.draw == "Yes"){
  //       drawB();
  //      }
  //   })
  // var drawB = function(){
  //   var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, "Joke's on you, Bats!", "Come on Bats, laugh it up", "Hello BatBreath!", "Makes you want to laugh, doesn't it?"];
  //   chosenCard = cards[Math.floor(Math.random() * cards.length)];
  //   console.log("Player B's card: " + chosenCard);
  //   playerBCardDraw = chosenCard;
  //   winner();
  // }
var draw = function(i){
      var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, "Joke's on you, Bats!", "Come on Bats, laugh it up", "Hello BatBreath!", "Makes you want to laugh, doesn't it?"];
      chosenCard = cards[54];
      // Math.floor(Math.random() * cards.length)];
      console.log("Player  " + (i+1) +"'s card: " + chosenCard);
      console.log("--------------------------------");
      if (typeof(chosenCard) === 'string') {
        chosenCard = -1;
      }
     return chosenCard;
    };
var winner = function(){
//   console.log(playerACardDraw);
// console.log(playerBCardDraw);
  var champion = cardDraw.indexOf(Math.max(...cardDraw));
  if (cardDraw[0] == -1 && cardDraw[1] == -1 && cardDraw[2] == -1 && cardDraw[3] == -1) {
    champion = 5; //all loser scrubs, git gud

  }
  for (var i = 0; i < cardDraw.length; i++) {
    if (i==champion) {
      playerScores[i]+=2;
    } else if (cardDraw[i] == -1){
      playerScores[i]--;
    }
  }
console.log(champion+"a,"+cardDraw.toString());
  
console.log("Current Score: Player A-" + playerA + "|| Player B-" + playerB);


}




start();