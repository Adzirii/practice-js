const sing = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

function getComputerChoice() {


    let rnd = Math.floor(Math.random() * 4);
    return sing[rnd];
}

console.log("Comp choise: " + getComputerChoice());

let playerChoise = prompt("Write your sign: ").toLowerCase();

console.log("Player choise: " + playerChoise);


function playRound(playerChoise, computerChoice){
   
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

console.log(playRound(playerChoise, getComputerChoice()));
