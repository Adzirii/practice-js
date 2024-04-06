const sing = {
    0: "rock",
    1: "paper",
    2: "scissors"
};
let playerScore = 0;
let computerScore = 0;

let computerChoice = function getComputerChoice() {
    let rnd = Math.floor(Math.random() * 3);
    return sing[rnd];
}

function playRound(playerChoise, computerChoice){
        console.log("Comp choise: " + computerChoice);
        console.log("Player choise: " + playerChoise);
    switch(playerChoise){
        case "rock":
            if (computerChoice == sing[0])
                return "Tie";
            else if (computerChoice == sing[1])
                return "Player lose";
            else 
                return "Player won";
            case "paper":
            if (computerChoice == sing[0])
                return "Player won";
            else if (computerChoice == sing[1])
                return "Tie";
            else  
                return "Player lose";
            case "scissors":
            if (computerChoice == sing[0])
                return "Player lose";
            else if (computerChoice == sing[1])
                return "Player won";
            else 
                return "Tie";
            default:
                return "Ivalid sing";
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let res = playRound(button.id, computerChoice());
        if (res === "Player won") playerScore++;
        else if (res === "Player lose") computerScore++;
        console.log(`Score: player - ${playerScore} , comuter - ${computerScore}`);
        scoreField.textContent = `Score: player - ${playerScore} , comuter - ${computerScore}`;
    });
});

const scoreField = document.createElement("div");
scoreField.textContent = `Score: player - ${playerScore} , comuter - ${computerScore}`;


const container = document.querySelector("#container");
container.appendChild(scoreField);