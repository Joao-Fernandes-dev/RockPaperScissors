console.log("Hello World");

// create function getHumanChoice

function getHumanChoice() {
    let humanChoice = prompt("PICK");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        console.log("You picked ROCK");
        return 0;
    } 
    else if (humanChoice === "paper") {
        console.log("You picked PAPER");
        return 1;        
    }
    else if (humanChoice === "scissors") {
        console.log("You picked SCISSORS");
        return 2;     
    }   
    else {
        console.log("Pick again: rock, paper or scissors");
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        console.log("Computer picked ROCK");
        return computerChoice;
    } 
    else if (computerChoice === 1) {
        console.log("Conmputer picked PAPER");   
        return computerChoice;
    }
    else {
        console.log("Computer picked SCISSORS");   
        return computerChoice;
    }  
}

let humanScore = 0;
let computerScore = 0;


function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("Draw");
    }
    else if (humanChoice === 0 && computerChoice === 1) {
        console.log("Computer wins");
        computerScore += 1;
    }
    else if (humanChoice === 0 && computerChoice === 2) {
        console.log("Player wins");
        humanScore += 1;
    }
    else if (humanChoice === 1 && computerChoice === 0) {
        console.log("Player wins");
        humanScore += 1;
    }
    else if (humanChoice === 1 && computerChoice === 2) {
        console.log("Computer wins");
        computerScore += 1;
    }
    else if (humanChoice === 2 && computerChoice === 0) {
        console.log("Computer wins");
        computerScore += 1;
    }
    else if (humanChoice === 2 && computerChoice === 1) {
        console.log("Player wins");
        humanScore += 1;
    }
    console.log(`Human score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
}

function playGame() {
    for (i = 5; i > 0; i--) {
        playRound();
        if (humanScore === computerScore) {
            console.log("DRAW!");
        }
        if (humanScore > computerScore) {
            console.log("Human wins!");
        }
        else {
            console.log("Computer wins");
        }  
    }
}
