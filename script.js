let computerChoice;
let humanChoice;
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

function getHumanChoice() {
  let userChoice;
  userChoice = prompt("Choose between Rock, Paper, Scissors : ");
  userChoice = userChoice.toLowerCase();

  if (userChoice == "rock") {
    return "rock";
  } else if (userChoice == "paper") {
    return "paper";
  } else if (userChoice == "scissors") {
    return "scissors";
  } else {
    return "Make a valid choice (Rock, Paper or Scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 5;

  function playRound(humanChoice, computerChoice) {
    // Si humanChoice = computer Choice, j'affiche (égalité! papier papier personne ne gagne si les 2 on choisit papier par exple)
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! ${humanChoice} = ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You loose! Paper beats Rock");
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You loose! Scissors beats Paper");
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You loose! Rock beats Scissors");
      computerScore += 1;
    }
  }

  let play;
  for (let i = round; i > 0; i--) {
    computerChoice = getComputerChoice();
    console.log("Computer choice is : " + computerChoice);

    humanChoice = getHumanChoice();
    console.log("The user choice is : " + humanChoice);

    play = playRound(humanChoice, computerChoice);
  }

  if (humanScore === computerScore) {
    console.log(
      "Tie! Your score : " + humanScore + " Computer score : " + computerScore,
    );
  } else if (humanScore < computerScore) {
    console.log(
      "You loose the game! Your score : " +
        humanScore +
        " Computer score : " +
        computerScore,
    );
  } else {
    console.log(
      "Congratulations!! You win the game! Your score : " +
        humanScore +
        " Computer score : " +
        computerScore,
    );
  }
}

playGame();
