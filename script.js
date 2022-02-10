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
    document.querySelector('#turn').textContent="Computer choise is: " + computerSelection + ". ";
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

function game(playerSelection) {
    console.log(playRound(playerSelection, computerPlay()));
    document.querySelector('#counter').textContent="Computer score: " + computerCounter + ". Your score: " + playerCounter + ".";
    if (computerCounter == 5 || playerCounter == 5) {
        let winner
        if (playerCounter < computerCounter) {
            winner = "The winner is: Computer! Better luck next time!"
            new Audio("sounds\\lose.mp3").play()
        } else if (playerCounter > computerCounter) {
            winner = "The winner is: You! Congrats!"
            new Audio("sounds\\win.mp3").play()
        } else if (playerCounter === computerCounter) {
            winner = "It's a draw! Let's play another game!"
        }
        console.log(winner) // declares the winner
        document.querySelector('#winner').textContent=String(winner)
        document.getElementById("btnRock").disabled = true;
        document.getElementById("btnPaper").disabled = true;
        document.getElementById("btnScissors").disabled = true;
    }
}

function reset() {
    playerCounter = 0; //reinitialize the counter
    computerCounter = 0; //reinitialize the counter
    document.querySelector('#turn').textContent="";
    document.querySelector('#counter').textContent="";
    document.querySelector('#winner').textContent="";
    document.getElementById("btnRock").disabled = false;
    document.getElementById("btnPaper").disabled = false;
    document.getElementById("btnScissors").disabled = false;
}

function playSound(name) {
    new Audio("sounds\\"+name+".mp3").play()
}

const btnRockEvent = document.querySelector('#btnRock').addEventListener('click', function() {game("Rock"); playSound("rock");});

const btnPaperEvent = document.querySelector('#btnPaper').addEventListener('click', function() {game("Paper"); playSound("paper");});

const btnScissorsEvent = document.querySelector('#btnScissors').addEventListener('click', function() {game("Scissors"); playSound("scissors");});

const btnResetEvent = document.querySelector('#btnReset').addEventListener('click', function() {reset()});


/* aggiungere suoni di sasso carta forbice alla pressione del tasto */