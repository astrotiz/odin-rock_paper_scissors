let choiseArray = [
    'Rock',
    'Paper',
    'Scissors'
];

let playerCounter = 0;
let computerCounter = 0;


function computerPlay() {
    let computerSelection = choiseArray[Math.floor(Math.random()*choiseArray.length)];
    console.log("Computer choise is: " + computerSelection);
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerCounter++;
        return("You lose! Paper beats Rock!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerCounter++;
        return("You lose! Scissors beats Paper!")
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerCounter++;
        return("You lose! Rock beats Scissors!")
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        computerCounter++;
        playerCounter++;
        return("Draw! Everyone chose Rock!")
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        computerCounter++;
        playerCounter++;
        return("Draw! Everyone chose Scissors!")
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        computerCounter++;
        playerCounter++;
        return("Draw! Everyone chose Paper!")
    } else {
        playerCounter++;
        return("You win!")
    }
}

function game(roundNumber) {
    playerCounter = 0; //reinitialize the counter
    computerCounter = 0; //reinitialize the counter
    for (let i = 0; i < roundNumber; i++) {
        console.log(playRound(prompt("Write your choise: "), computerPlay()));
    }
    let winner
    if (playerCounter < computerCounter) {
        winner = "The winner is: Computer! Better luck next time"
    } else if (playerCounter > computerCounter) {
        winner = "The winner is: You! Congrats"
    } else if (playerCounter === computerCounter) {
        winner = "It's a draw!"
    }
    console.log(winner) // declares the winner
}

game(prompt("How many rounds do you want to play?"));