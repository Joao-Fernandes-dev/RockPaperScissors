console.log("Hello World");

// create function getHumanChoice

function getHumanChoice() {
    const choice = prompt("PICK");
    choice = choice.toLowerCase();

    if (choice === "rock") {
        console.log("You picked ROCK");
    } 
    else if (choice === "paper") {
        console.log("You picked PAPER");        
    }
    else if (choice === "scissors") {
        console.log("You picked SCISSORS");     
    }   
    else {
        console.log("Pick again: rock, paper or scissors");
    }
}

//function getComputerChoice() {


function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        console.log("Computer picked ROCK");
    } 
    else if (choice === 1) {
        console.log("Conmputer picked PAPER");        
    }
    else {
        console.log("Computer picked SCISSORS");   
    }  
}