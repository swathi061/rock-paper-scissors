function getComputerChoice(options) {
    let computerChoice;
    let index = Math.floor(Math.random() * options.length);
    computerChoice = options[index];
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    let res;
    if (playerSelection === computerSelection) {
        res = "Tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        res = "You Won";
    }
    else {
        res = "You Lost";
    }
    return res;
}
const options = ["rock", "paper", "scissors"];
var comp_choice = getComputerChoice(options);
var user_choice = getComputerChoice(options);
let res = playRound(user_choice, comp_choice);
console.log("Comp: " + comp_choice);
console.log("User: " + user_choice);
console.log(res);