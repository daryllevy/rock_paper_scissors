let computerChoice;
let userChoice;
let humanScore = 0;
let computerScore = 0;
let result = document.querySelector(".result");
let choice = document.querySelector(".choice-user");
let player = document.querySelector(".player1-score");
let computer = document.querySelector(".player2-score");
let scorePlayer = document.createElement("span");
let scoreComputer = document.createElement("span");
let winner = document.querySelector(".winner");
let btnReplay = document.createElement("button");
btnReplay.textContent = "Replay";
btnReplay.setAttribute(
  "style",
  "background-color: green; color: #ffff; padding: 10px 18px; border-radius: 15px; font-size: 18px; font-weight: 700; margin-left: 600px; margin-bottom: 16px;",
);
const body = document.querySelector("body");

/// Obtenir le choix de la machine
function getComputerChoice() {
  // J'initialise une variable qui va contenir un nbre alétoire entre 0 et 2
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/// Fonction pour déterminer qui à gagné une manche
function playRound(userChoice, computerChoice) {
  // Si userChoice = computer Choice, j'affiche (égalité! papier papier personne ne gagne si les 2 on choisit papier par exple)
  if (userChoice === computerChoice) {
    result.textContent = `It's a tie! ${userChoice} = ${computerChoice}`;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result.textContent = `You choose ${userChoice} and the computer choose ${computerChoice}\nYou loose! Paper beats Rock`;
    computerScore += 1;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    result.textContent = `You choose ${userChoice} and the computer choose ${computerChoice}\nYou win! Rock beats Scissors`;
    humanScore += 1;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result.textContent = `You choose ${userChoice} and the computer choose ${computerChoice}\nYou loose! Scissors beats Paper`;
    computerScore += 1;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result.textContent = `You choose ${userChoice} and the computer choose ${computerChoice}\nYou win! Paper beats Rock`;
    humanScore += 1;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result.textContent = `You choose ${userChoice} and the computer choose ${computerChoice}\nYou win! Scissors beats Paper`;
    humanScore += 1;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result.textContent = `You choose ${userChoice} and the computer choose ${computerChoice}\nYou loose! Rock beats Scissors`;
    computerScore += 1;
  }
  scorePlayer.textContent = " " + humanScore;
  scoreComputer.textContent = " " + computerScore;
  player.appendChild(scorePlayer);
  computer.appendChild(scoreComputer);
}

/// Suppression du bouton replay
btnReplay.addEventListener("click", (e) => {
  humanScore = 0;
  computerScore = 0;
  result.textContent = "";
  winner.textContent = "";
  scorePlayer.textContent = "";
  scoreComputer.textContent = "";
  btnReplay.remove();
});

/// Logique des parties
function playGame() {
  choice.addEventListener("click", (e) => {
    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        winner.textContent = "Congratulations!! You win the game";
        return;
      } else {
        winner.textContent = "Game Over! You lose the game";
        return;
      }
    }

    let target = e.target;
    switch (target.id) {
      case "rock":
        userChoice = "ROCK";
        break;
      case "paper":
        userChoice = "PAPER";
        break;
      case "scissors":
        userChoice = "SCISSORS";
        break;
    }
    userChoice = userChoice.toLowerCase();

    computerChoice = getComputerChoice();

    playRound(userChoice, computerChoice);

    if (humanScore >= 5 || computerScore >= 5) {
      result.textContent = "";
      if (humanScore > computerScore) {
        winner.textContent = "Congratulations!! You win the game";
        body.appendChild(btnReplay);
      } else {
        winner.textContent = "Game Over! You lose the game";
        body.appendChild(btnReplay);
      }
    }
  });
}

playGame();
