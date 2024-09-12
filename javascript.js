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
    if (computerChoice === 0) {
        console.log("Computer picked ROCK");
        return rock;
    } 
    else if (computerChoice === 1) {
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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        currentRound.textContent = (
            `This round: Draw`)
    }
    else if (humanChoice === rock && computerChoice === paper) {
        currentRound.textContent = (
            `This round: Computer wins`)
        computerScore += 1;
    }
    else if (humanChoice === rock && computerChoice === scissors) {
        currentRound.textContent = (
            `This round: Player wins`)
        humanScore += 1;
    }
    else if (humanChoice === paper && computerChoice === rock) {
        currentRound.textContent = (
            `This round: Player wins`)
        humanScore += 1;
    }
    else if (humanChoice === paper && computerChoice === scissors) {
        currentRound.textContent = (
            `This round: Computer wins`)
        computerScore += 1;
    }
    else if (humanChoice === scissors && computerChoice === rock) {
        currentRound.textContent = (
            `This round: Computer wins`)
        computerScore += 1;
    }
    else if (humanChoice === scissors && computerChoice === paper) {
        currentRound.textContent = (
            `This round: Player wins`)
        humanScore += 1;
    }

    pcScore.textContent = (`Computer Score is ${computerScore}`);
    playerScore.textContent = (`Player Score is ${humanScore}`);

    if (computerScore === 5) {
        winner.textContent = (
            `COMPUTER WON`)
        }
    if (humanScore === 5) {
        winner.textContent = (
            `PLAYER WON`)
        }
    }




rock.addEventListener("click", function () {
    console.log(`Player picked ROCK`);
    playRound(rock);
});
paper.addEventListener("click", function () {
    playRound(paper);
});
scissors.addEventListener("click", function () {
    playRound(scissors);
});