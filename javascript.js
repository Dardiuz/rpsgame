// rock paper scissor game, 5 rounds
// vs computer played completely in the console

let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

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
    h2.innerText = "You won ";
  } else if (computerScore === 5) {
  }
};

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});

// function game() {
// for (let i = 0; i < 5; i++) {
//   const playerSelection = prompt(
//     "Type 'Rock', 'Paper' or 'Scissors' to play a game"
//   ).toLowerCase();
// const computerSelection = getComputerChoice();
// console.log("1", playRound(playerSelection, computerSelection));

// if (playerScore > computerScore) {
//   return "Games Completed, You beat the computer!";
// } else if (playerScore < computerScore) {
//   return "Games Completed, You lost try again";
// } else {
//   return "Games Completed, you Tied";
// }

// console.log(game());
