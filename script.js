function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    choice = choice.toLowerCase();

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice);

        if (humanChoice === computerChoice) {
            console.log("TIE!");
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else {
            console.log("Invalid Choice!");
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Computer: ${computerScore} You: ${humanScore}`);
}

playGame();
