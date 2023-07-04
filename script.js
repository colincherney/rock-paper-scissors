function getComputerChoice() {
  let randnum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  let decision = choices[randnum];
  return decision;
}

console.log(getComputerChoice());
