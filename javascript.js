function getHumanChoice() {
    let humanChoice = prompt("PICK");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        console.log("You picked ROCK");
        return rock;
    } 
    else if (humanChoice === "paper") {
        console.log("You picked PAPER");
        return paper;        
    }
    else if (humanChoice === "scissors") {
        console.log("You picked SCISSORS");
        return scissors;     
    }   
    else {
        console.log("Pick again: rock, paper or scissors");
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === rock) {
        console.log("Computer picked ROCK");
        return rock;
    } 
    else if (computerChoice === paper) {
        console.log("Conmputer picked PAPER");   
        return paper;
    }
    else {
        console.log("Computer picked SCISSORS");   
        return scissors;
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
    else if (humanChoice === rock && computerChoice === paper) {
        console.log("Computer wins");
        computerScore += 1;
    }
    else if (humanChoice === rock && computerChoice === scissors) {
        console.log("Player wins");
        humanScore += 1;
    }
    else if (humanChoice === paper && computerChoice === rock) {
        console.log("Player wins");
        humanScore += 1;
    }
    else if (humanChoice === paper && computerChoice === scissors) {
        console.log("Computer wins");
        computerScore += 1;
    }
    else if (humanChoice === scissors && computerChoice === rock) {
        console.log("Computer wins");
        computerScore += 1;
    }
    else if (humanChoice === scissors && computerChoice === paper) {
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



rock.addEventListener("click", function(e) {console.log(e.target)});