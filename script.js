let computerChoice;
let userChoice;
let result = document.querySelector(".result");
let container = document.querySelector(".container");

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
}

container.addEventListener("click", (e) => {
  let target = e.target;
  switch (target.textContent) {
    case "ROCK":
      userChoice = "ROCK";
      break;
    case "PAPER":
      userChoice = "PAPER";
      break;
    case "SCISSORS":
      userChoice = "SCISSORS";
      break;
  }
  userChoice = userChoice.toLowerCase();

  computerChoice = getComputerChoice();

  playRound(userChoice, computerChoice);
});

/// Obtenir le choix du joueur

// userChoice = userChoice.toLowerCase();
// console.log(userChoice);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // if (humanScore === computerScore) {
  //   console.log(
  //     "Tie! Your score : " + humanScore + " Computer score : " + computerScore,
  //   );
  // } else if (humanScore < computerScore) {
  //   console.log(
  //     "You loose the game! Your score : " +
  //       humanScore +
  //       " Computer score : " +
  //       computerScore,
  //   );
  // } else {
  //   console.log(
  //     "Congratulations!! You win the game! Your score : " +
  //       humanScore +
  //       " Computer score : " +
  //       computerScore,
  //   );
  // }
}

// playGame();
