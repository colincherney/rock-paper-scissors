let personWinCounter = 0;
let computerWinCounter = 0;

function playGame(player) {
  // first player to 5 wins game

  if (personWinCounter < 5 && computerWinCounter < 5) {
    let randnum = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    let computer = choices[randnum];

    let og = "";

    if (player == "rock") {
      og = "images/rock.png";
    }
    if (player == "paper") {
      og = "images/paper.png";
    }
    if (player == "scissors") {
      og = "images/scissors.png";
    }

    if (computer == player) {
      imageChange(player, "images/draw.png", og);
    }
    if (computer == "rock" && player == "paper") {
      personWinCounter++;
      document.getElementById("playerScoreUpdate").innerHTML = personWinCounter;
      imageChange(player, "images/check.png", og);
    }
    if (computer == "rock" && player == "scissors") {
      computerWinCounter++;
      document.getElementById("computerScoreUpdate").innerHTML =
        computerWinCounter;
      imageChange(player, "images/red-x.png", og);
    }
    if (computer == "paper" && player == "rock") {
      computerWinCounter++;
      document.getElementById("computerScoreUpdate").innerHTML =
        computerWinCounter;
      imageChange(player, "images/red-x.png", og);
    }
    if (computer == "paper" && player == "scissors") {
      personWinCounter++;
      document.getElementById("playerScoreUpdate").innerHTML = personWinCounter;
      imageChange(player, "images/check.png", og);
    }
    if (computer == "scissors" && player == "rock") {
      personWinCounter++;
      document.getElementById("playerScoreUpdate").innerHTML = personWinCounter;
      imageChange(player, "images/check.png", og);
    }
    if (computer == "scissors" && player == "paper") {
      computerWinCounter++;
      document.getElementById("computerScoreUpdate").innerHTML =
        computerWinCounter;
      imageChange(player, "images/red-x.png", og);
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

  document.getElementById("computerScoreUpdate").innerHTML = 0;
  document.getElementById("playerScoreUpdate").innerHTML = 0;
}

function imageChange(id, result, original) {
  document.getElementById(id).setAttribute("src", result);
  setTimeout(() => {
    document.getElementById(id).setAttribute("src", original);
  }, 500);
}
