# ChallengeCardGame

A command line project that uses Javascript, Node.js, and a NPM package called Inquirer to have a 2-4 player card game.

Users will select the number of players they're starting the game with:
![Player Selection](https://raw.githubusercontent.com/mlin2814/ChallengeCardGame/master/assets/images/Screenshot%20(19).png)

Then the project will randomly select cards for the players:
![Card Selection](https://raw.githubusercontent.com/mlin2814/ChallengeCardGame/master/assets/images/Screenshot%20(20).png)
As you can see, the player with the highest value card will receive two points.

The deck has 56 cards. 52 are from a standard card deck and 4 are random penalty cards. If a user gets a penalty card, they lose one point. 
Bonus: The penalty cards I approached like Jokers, so all of their values are strings based off of Joker quotes.
![Penalty Cards: Joker Style](https://raw.githubusercontent.com/mlin2814/ChallengeCardGame/master/assets/images/Screenshot%20(23).png)

Players need a minimum of 21 points to win the game, but need to be two points ahead of the next highest score to secure that win. If there are 21 points, followed by 20, then the game runs again until there is a two point lead for the highest score.
![Winner Winner](https://raw.githubusercontent.com/mlin2814/ChallengeCardGame/master/assets/images/Screenshot%20(24).png)

Hope this is a fun project for you to try!
