function getComputerChoice() {
    let computerPick;
    const number = Math.floor(Math.random()*3)+1;
    if(number == 1) {
        computerPick = "rock";
        return computerPick;
    }
    else if(number == 2) {
        computerPick = "paper";
        return computerPick;
    }
    else {
        computerPick = "scissors";
        return computerPick;
    }
}


function verifyUserInput() {
    let userPick = prompt("Enter one of the options: ");
    if (userPick.toLowerCase() === "rock") {
        userPick = "rock";
        return userPick;
    }
    else if (userPick.toLowerCase() === "paper") {
        userPick = "paper";
        return userPick;
    }
    else if (userPick.toLowerCase() === "scissors") {
        userPick = "scissors";
        return userPick;
    }
    else {
        userPick = "rock";
        return userPick;
    }
}

function roundSimulate(computerResult, userResult) {
    computer = computerResult;
    user = userResult;
    if(user === "rock") {
        if(computer === "rock") {
            return ("Tie!");
        }
        else if(computer === "paper") {
            return("Computer wins, paper beats rock.");
        }
        else {
            return("User wins, rock beats scissors");
        }
    }
    else if(user === "scissors") {
        if(computer === "scissors") {
            return("Tie!");
        }
        else if(computer === "paper") {
            return("User wins, scissors beats paper.");
        }
        else {
            return("Computer wins, rock beats scissors");
        }
    }
    else if(user === "paper") {
        if(computer === "paper") {
            return("Tie!");
        }
        else if(computer === "rock") {
            return("User wins, paper beats rock.");
        }
        else {
            return("Computer wins, scissors beats paper");
        }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let comp = getComputerChoice();
        let usa = verifyUserInput();
        let val = (roundSimulate(comp, usa));
        console.log(val);
        if(val.includes("User wins")) {
            userScore++;
        }
        else if(val.includes("Computer wins")) {
            computerScore++;
        }
        else {
            continue;
        }
    }
    if(userScore > computerScore) {
        return "User wins!";
    }
    else if(userScore < computerScore) {
        return "Computer wins!";
    }
    else {
        return "Tie!";
    }
}

console.log(game());