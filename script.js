let personWinCounter = 0;
let computerWinCounter = 0;

function playGame(player) {
  // first player to 5 wins game

  if (personWinCounter < 5 && computerWinCounter < 5) {
    let randnum = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    let computer = choices[randnum];

    if (computer == player) {
      document.getElementById("print").innerHTML = "Tie Game!";
    }
    if (computer == "rock" && player == "paper") {
      document.getElementById("print").innerHTML =
        "The computer chose " + computer + "! You Won!";
      personWinCounter++;
      document.getElementById("playerScoreUpdate").innerHTML = personWinCounter;
    }
    if (computer == "rock" && player == "scissors") {
      document.getElementById("print").innerHTML =
        "The computer chose " + computer + "! You Lost!";
      computerWinCounter++;
      document.getElementById("computerScoreUpdate").innerHTML =
        computerWinCounter;
    }
    if (computer == "paper" && player == "rock") {
      document.getElementById("print").innerHTML =
        "The computer chose " + computer + "! You Lost!";
      computerWinCounter++;
      document.getElementById("computerScoreUpdate").innerHTML =
        computerWinCounter;
    }
    if (computer == "paper" && player == "scissors") {
      document.getElementById("print").innerHTML =
        "The computer chose " + computer + "! You Won!";
      personWinCounter++;
      document.getElementById("playerScoreUpdate").innerHTML = personWinCounter;
    }
    if (computer == "scissors" && player == "rock") {
      document.getElementById("print").innerHTML =
        "The computer chose " + computer + "! You Won!";
      personWinCounter++;
      document.getElementById("playerScoreUpdate").innerHTML = personWinCounter;
    }
    if (computer == "scissors" && player == "paper") {
      document.getElementById("print").innerHTML =
        "The computer chose " + computer + "! You Lost!";
      computerWinCounter++;
      document.getElementById("computerScoreUpdate").innerHTML =
        computerWinCounter;
    }
  }
  // if player wins
  if (personWinCounter == 5) {
    document.getElementById("outcome").innerHTML = "You Win!";
  }
  // if computer wins
  if (computerWinCounter == 5) {
    document.getElementById("outcome").innerHTML = "You Lost";
  }
}

function resetGame() {
  personWinCounter = 0;
  computerWinCounter = 0;

  document.getElementById("outcome").innerHTML = "";
  document.getElementById("print").innerHTML = "";
  document.getElementById("computerScoreUpdate").innerHTML = 0;
  document.getElementById("playerScoreUpdate").innerHTML = 0;
}
