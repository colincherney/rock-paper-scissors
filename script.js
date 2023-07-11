function playRound(player) {
  let randnum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  let computer = choices[randnum];

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

// function game() {
//   let x = 0;
//   while (x <= 4) {
//     playRound(computerSelection(), playerSelection());
//     x++;
//   }
// }

// game();
