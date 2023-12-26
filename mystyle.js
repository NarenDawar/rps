


function UserInput() {
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



function onClick(entry) {
    let computerAns = getComputerChoice();
    roundSimulate(computerAns, entry);
}

const playerDis = document.querySelector('#playerDis');
const computerDis = document.querySelector('#computerDis');
const resultDis = document.querySelector('#resultDis');
const buttons = document.querySelectorAll('.buttons');
const userCount = document.querySelector('#userDis');
const AICount = document.querySelector('#AIDis');
let player;
let computer;
let result;
let userPoints = 0;
let computerPoints = 0;

buttons.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    getComputerChoice();
    playerDis.textContent = `Player: ${player}`;
    computerDis.textContent = `Computer: ${computer}`;
    resultDis.textContent = `Result: ${checkWinner()}`;
    userCount.textContent = `User Points: ${userPoints}`;
    AICount.textContent = `Computer Points: ${computerPoints}`;
}))

function checkWinner() {
    
    if(computer == player) {
        return "Undecided";
    }
    else if(computer == "rock") {
        (player == "paper") ? userPoints++ : computerPoints++
        if(userPoints == 5) {
            return "You win!";
        }
        else if (computerPoints == 5){
            return "You lost";
        }
        else {
            return "Undecided";
        }
    }
    else if(computer == "paper") {
        (player == "scissors") ? userPoints++ : computerPoints++
        if(userPoints == 5) {
            return "You win!";
        }
        else if (computerPoints == 5){
            return "You lost";
        }
        else {
            return "Undecided";
        }
    }
    else if(computer == "scissors") {
        (player == "rock") ? userPoints++ : computerPoints++
        if(userPoints == 5) {
            return "You win!";
        }
        else if (computerPoints == 5){
            return "You lost";
        }
        else {
            return "Undecided";
        }
    }
    
}

function getComputerChoice() {
    const number = Math.floor(Math.random()*3)+1;
    if(number == 1) {
        computer = "rock";
    }
    else if(number == 2) {
        computer = "paper";
    }
    else {
        computer = "scissors";
    }
}
