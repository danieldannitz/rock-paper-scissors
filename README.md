Don’t forget to commit early & often! You can reference the Commit Message lesson here!

1. Start a new Git repo for your project. (✔️)

2. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there. (✔️)

3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step! (✔️)

4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
   a) Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). (✔️)

5. Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results: (✔️)

function playRound(playerSelection, computerSelection) {
// your code here!

} (✔️)

const playerSelection = "rock"; (✔️)
const computerSelection = computerPlay(); (✔️)
console.log(playRound(playerSelection, computerSelection)); (✔️)
