function getComputerChoice() {
  let randnum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  let decision = choices[randnum];
  return decision;
}

function playerSelection() {
  while (true) {
    let decision = prompt("Choose rock, paper, or scissors!").toLowerCase();
    if (decision == "rock" || decision == "paper" || decision == "scissors") {
      return decision;
    }
  }
}

console.log(playerSelection());
