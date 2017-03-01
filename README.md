# ChallengeCardGame

A command line project that uses Javascript, Node.js, and a NOM package called Inquirer to have a 2-4 player card game.

Users will select the number of players they're starting the game with:


Then the project will randomly select cards for the players:


The player with the highest value card will receive two points:


The deck has 56 cards. 52 are from a standard card deck and 4 are random penalty cards. If a user gets a penalty card, they lose one point. *Bonus: The penalty cards I approached like Jokers, so all of their values are strings based off of Joker quotes


Players need a minimum of 21 points to win the game, but need to be two points ahead of the next highest score to secure that win. If there are 21 points, followed by 20, then the game runs again until there is a two point lead for the highest score.


Hope this is a fun project for you to try!
