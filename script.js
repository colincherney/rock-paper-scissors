function computerSelection() {
  let randnum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  let computerDecision = choices[randnum];
  return computerDecision;
}

function playerSelection() {
  while (true) {
    let decision = prompt("Choose rock, paper, or scissors!").toLowerCase();
    if (decision == "rock" || decision == "paper" || decision == "scissors") {
      return decision;
    }
  }
}

function playRound(computer, player) {
  if (computer == player) {
    console.log("Tie Game!");
  }
  if (computer == "rock" && player == "paper") {
    console.log("The computer chose " + computer + "! You Won!");
  }
  if (computer == "rock" && player == "scissors") {
    console.log("The computer chose " + computer + "! You Lost!");
  }
  if (computer == "paper" && player == "rock") {
    console.log("The computer chose " + computer + "! You Lost!");
  }
  if (computer == "paper" && player == "scissors") {
    console.log("The computer chose " + computer + "! You Won!");
  }
  if (computer == "scissors" && player == "rock") {
    console.log("The computer chose " + computer + "! You Won!");
  }
  if (computer == "scissors" && player == "paper") {
    console.log("The computer chose " + computer + "! You Lost!");
  }
}

function game() {
  let x = 0;
  while (x <= 4) {
    playRound(computerSelection(), playerSelection());
    x++;
  }
}

game();
