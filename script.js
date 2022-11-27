const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const user = document.getElementById("user");
const comp = document.getElementById("witch");
const result = document.getElementById("result");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

let user_score =0,comp_score=0;

function proceedGame() {
    return (user_score === 5 || comp_score === 5);
}
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}
function playRound(playerSelection) {
    // your code here!
    if(proceedGame()){
        if(user_score===5){
            prompt("You won");
        }
        else{
            prompt("Witch won");
        }
    }

    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        user_score +=1;
        user.innerHTML = user_score;
    }
    else {
        comp_score += 1;
        witch.innerHTML = comp_score;
    }
}
