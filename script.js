const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const user = document.getElementById("user");
const comp = document.getElementById("witch");
const result = document.getElementById("result");
const f_result = document.getElementById("f_result");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

let user_score = 0, comp_score = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}
function playRound(playerSelection) {
    // your code here!
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        result.innerHTML = "It's a tie!";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        user_score += 1;
        user.innerHTML = user_score;
        result.innerHTML = "You scored 1 point!";
    }
    else {
        comp_score += 1;
        witch.innerHTML = comp_score;
        result.innerHTML = "Witch scored 1 point!";
    }
    message();
}
function message() {
    if (user_score === 5 || comp_score === 5) {
        if (user_score > comp_score) {
            result.innerHTML = "You won! \n Get your Potion!!!";
        }
        else {
            result.innerHTML = "Witch won";
        }
        document.getElementById("rock").style.pointerEvents = "none";
        document.getElementById("paper").style.pointerEvents = "none";
        document.getElementById("scissors").style.pointerEvents = "none";
    }
}


