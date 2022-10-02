// rock paper scissor game, 5 rounds
// vs computer played completely in the console

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  // console.log("1", playerSelection, "2", computerSelection);
  if (playerSelection === computerSelection) {
    return "You Tied!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Type 'Rock', 'Paper' or 'Scissors' to play a game"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log("1", playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return "Games Completed, You beat the computer!";
  } else if (playerScore < computerScore) {
    return "Games Completed, You lost try again";
  } else {
    return "Games Completed, you Tied";
  }
}

console.log(game());
