let humanScore = 0;
let computerScore = 0;

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

let computerChoice = getComputerChoice();
console.log("Computer choice is : " + computerChoice);

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

let humanChoice = getHumanChoice();
console.log("The user choice is : " + humanChoice);

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

  console.log(
    "Human score = " + humanScore,
    "Computer score = " + computerScore,
  );
}

playRound(humanChoice, computerChoice);
