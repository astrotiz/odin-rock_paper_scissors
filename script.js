let choiseArray = [
    'Rock',
    'Paper',
    'Scissors'
];

function computerPlay() {
    let computerSelection = choiseArray[Math.floor(Math.random()*choiseArray.length)];
    console.log("Computer choise is: " + computerSelection);
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper") {
        return("You lose! Paper beats Rock!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return("You lose! Scissors beats Paper!")
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return("You lose! Rock beats Scissors!")
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return("Draw! Everyone chose Rock!")
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return("Draw! Everyone chose Scissors!")
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return("Draw! Everyone chose Paper!!")
    } else {
        return("You win!")
    }
}

console.log(playRound("rock", computerPlay()));