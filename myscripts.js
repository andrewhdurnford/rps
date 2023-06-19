function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    winner = "tie";
    return "Tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    winner = "computer";
    return "You lose! " + computerChoice + " beats " + playerChoice;
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors")
  ) {
    winner = "player";
    return "You win! " + playerChoice + " beats " + computerChoice;
  } else {
    input = 0;
    return "Oops! You didn't choose Rock, Paper, or Scissors :(";
  }
}

function game() {
  for (let i = 1; i < 6; i++) {
    console.log("Round " + i + ":");
    playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    if (input == 0) {
      i--;
    }
    if (winner === "tie" && input != 0) {
      console.log(score);
    } else if (winner === "player" && input != 0) {
      p++;
      score = "You: " + p + " Computer: " + c;
      console.log(score);
    } else if (winner === "computer" && input != 0) {
      c++;
      score = "You: " + p + " Computer: " + c;
      console.log(score);
    }
    input = 1;
  }

  if (p == c) {
    console.log("Tie!");
  } else if (p > c) {
    console.log("You win!");
  } else if (p < c) {
    console.log("You lose!");
  }
}

let playerChoice = "a";
let computerChoice = getComputerChoice();
let winner = " ";
let p = 0;
let c = 0;
let score = "You: " + p + " Computer: " + c;
let input = 1;

game();
