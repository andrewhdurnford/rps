let playerChoice = "";
let computerChoice = getComputerChoice();
var p = 0;
var c = 0;
var score = "You: " + p + " Computer: " + c;
var round = 0;
let result = document.querySelector("#result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const currentscore = document.querySelector("#score");
const gameresult = document.querySelector("#gameresult");
const newgame = document.querySelector("#game");

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
    return (
      playerChoice +
      " and " +
      computerChoice +
      " cancel out, round " +
      round +
      " is a " +
      "tie!"
    );
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    c++;
    return (
      "You lose round " +
      round +
      "! " +
      computerChoice +
      " beats " +
      playerChoice
    );
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors")
  ) {
    p++;

    return (
      "You win round " +
      round +
      "! " +
      playerChoice +
      " beats " +
      computerChoice
    );
  }
}

newgame.addEventListener("click", () => {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  result.innerText = "Select Rock, Paper, or Scissors to start!";
  currentscore.innerText = "";
  gameresult.innerText = "";
});

rock.addEventListener("click", () => {
  round++;
  playerChoice = "rock";
  computerChoice = getComputerChoice();
  result.innerText = playRound(playerChoice, computerChoice);
  currentscore.innerText = "You: " + p + " Computer: " + c;
  gameresult.innerText = outcome(round, p, c);
});

paper.addEventListener("click", () => {
  round++;
  playerChoice = "paper";
  computerChoice = getComputerChoice();
  result.innerText = playRound(playerChoice, computerChoice);
  currentscore.innerText = "You: " + p + " Computer: " + c;
  gameresult.innerText = outcome(round, p, c);
});

scissors.addEventListener("click", () => {
  round++;
  playerChoice = "scissors";
  computerChoice = getComputerChoice();
  result.innerText = playRound(playerChoice, computerChoice);
  currentscore.innerText = "You: " + p + " Computer: " + c;
  gameresult.innerText = outcome(round, p, c);
});

function outcome(rounds, ps, cs) {
  if (rounds == 5) {
    round = 0;
    p = 0;
    c = 0;
    paper.disabled = true;
    rock.disabled = true;
    scissors.disabled = true;
    if (ps == cs) {
      return "Tie!";
    } else if (ps > cs) {
      return "You win!";
    } else if (ps < cs) {
      return "You lose!";
    }
  }
  return "";
}
