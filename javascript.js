//rock paper scissor game player vs computer played in the console
//game will have 5 rounds (loop)
//return results
//compare player + computer input for results
//win or lose text in the console
//player input by prompt
//player input validation (spelling & case sensitivity)

//computer choice randomized
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You tied! You both picked ${playerSelection}";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You Lost! Rock destroys scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You Lost! Rock destroys scissors";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose wisely: 'Rock', 'Paper' or 'Scissors' "
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}
