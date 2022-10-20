// rock paper scissor game, 5 rounds
// vs computer played completely in the console

let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    p.innerText = "You Tied!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lose!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lose!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = "You lose!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win!";
    outcomeDiv.appendChild(p);
  }
}

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("player-won");
    h2.innerText = `You won from the computer. player: ${playerScore} vs computer: ${computerScore}`;
    outcomeDiv.appendChild(h2);
  } else if (computerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("computer-won");
    h2.innerText = `You lose from the computer. player: ${playerScore} vs computer: ${computerScore}`;
    outcomeDiv.appendChild(h2);
  }
};

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `player score: ${playerScore}            `;
  computerScoreSpan.innerText = `computer score: ${computerScore}        `;
};

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});
