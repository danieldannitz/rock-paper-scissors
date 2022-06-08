const choices = ["rock", "paper", "scissors"];
let winners = [];

const startGame = () => {
  let icons = document.querySelectorAll("i");
  icons.forEach((icon) =>
    icon.addEventListener("click", () => {
      if (icon.id) {
        playRound(icon.id);
      }
    })
  );
};

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

const playRound = (playerChoice) => {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerChoice = computerSelect();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);

  wins = checkWins();
  if (wins === 5) {
    displayEnd();
  }
};

const displayRound = (playerChoice, computerChoice, winner) => {
  document.querySelector(".playerChoice").textContent = `You chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `The Computer chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  document.querySelector(".winner").textContent = `Round Winner: ${winner}`;
  displayRoundWinner(winner);
};

const displayRoundWinner = (winner) => {
  if (winner === "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner === "Computer") {
    document.querySelector(".winner").textContent =
      "The computer won the round";
  } else {
    document.querySelector(".winner").textContent = "Tie round";
  }
};

const tallyWins = () => {
  const pWinCount = winners.filter((item) => item === "Player").length;
  const cWinCount = winners.filter((item) => item === "Computer").length;
  const ties = winners.filter((item) => item === "Tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Score: ${ties}`;
};

const displayEnd = () => {
  let playerWins = winners.filter((item) => item === "Player").length;
  if (playerWins === 5) {
    document.querySelector(".winner").textContent =
      "You Won 5 Games, Congrats!";
  } else {
    document.querySelector(".winner").textContent =
      "Sorry, the computer won 5 times";
  }
  document.querySelector(".reset").style.display = "flex";
};

const computerSelect = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const checkWins = () => {
  const pWinCount = winners.filter((item) => item === "Player").length;
  const cWinCount = winners.filter((item) => item === "Computer").length;
  return Math.max(pWinCount, cWinCount);
};

const checkWinner = (choice1, choice2) => {
  if (
    (choice1 === "rock" && choice2 === "scissors") ||
    (choice1 === "scissors" && choice2 === "paper") ||
    (choice1 === "paper" && choice2 === "rock")
  ) {
    return "Player";
  } else if (choice1 === choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
};

const setWins = () => {
  const pWinCount = winners.filter((item) => item === "Player").length;
  const cWinCount = winners.filter((item) => item === "Computer").length;
  const ties = winners.filter((item) => item === "Tie").length;
};
startGame();
