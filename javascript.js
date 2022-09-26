console.log("Hello Word!");

//rock paper scissor game player vs computer played in the console
//game will have 5 rounds (loop)
//return results
//compare player + computer input for results
//win or lose text in the console

//player input by prompt
//player input validation (spelling & case sensitivity)

//global choices for player & computer variable
var choices = ["rock", "paper", "scissors"];

//computer choice randomized
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

function playerInput() {}
