const choices = ["rock", "paper", "scissors"];
const winners = [];

const game = () => {
  //play the game
  //play five rounds
  for (i = 0; i < 5; i++) {
    playRound(i);
  }
  //count winner times
  countWins();
};

const playRound = (round) => {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRounds(playerSelection, computerSelection, winner, round);
};

const playerChoice = () => {
  let input = prompt("Rock, Paper or Scissors");
  while (input == null) {
    prompt("Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let checkInput = validateInput(input);
  while (checkInput == false) {
    input = prompt("Type Rock, Paper, or Scissors.");
    while (input == null) {
      input = prompt("Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    checkInput = validateInput(input);
  }
  return input;
};

const validateInput = (choice) => {
  return choices.includes(choice);
};

const computerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const checkWinner = (choicePlayer, choiceComputer) => {
  if (choicePlayer === choiceComputer) {
    return "That's a Tie";
  } else if (
    (choicePlayer === "rock" && choiceComputer === "scissors") ||
    (choicePlayer === "paper" && choiceComputer === "rock") ||
    (choicePlayer === "scissors" && computerChoice === "paper")
  ) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
};

const countWins = () => {
  let playerWins = winners.filter((item) => item == "Player Wins").length;
  let computerWins = winners.filter((item) => item == "Computer Wins").length;
  let ties = winners.filter((item) => item == "That's a Tie").length;
  console.log(
    `Results are: Player Wins: ${playerWins}, Computer Wins: ${computerWins}, Ties: ${ties}`
  );
};

const logRounds = (playerChoice, computerChoice, checkWinner, round) => {
  console.log(`Rounds: ${round + 1}`);
  console.log(
    `Player chose: ${playerChoice}, Computer chose: ${computerChoice}`
  );
  console.log(`${checkWinner} won the round`);
};
