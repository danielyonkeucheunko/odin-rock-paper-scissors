let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    const results = document.getElementById("results");
    const score = document.getElementById("score");

    if (humanChoice === computerChoice) {
        results.textContent = "TIE!";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        results.textContent =
            `${humanChoice} vs ${computerChoice}` +
            " You lose! Paper beats Rock!";
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        results.textContent =
            `${humanChoice} vs ${computerChoice}` +
            " You lose! Rock beats Scissors!";
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        results.textContent =
            `${humanChoice} vs ${computerChoice}` +
            " You lose! Scissors beats Paper!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        results.textContent =
            `${humanChoice} vs ${computerChoice}` +
            " You win! Paper beats Rock!";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.textContent =
            `${humanChoice} vs ${computerChoice}` +
            " You win! Rock beats Scissors!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent =
            `${humanChoice} vs ${computerChoice}` +
            " You win! Scissors beats Paper!";
        humanScore++;
    }

    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        results.textContent += " GAME OVER";
        humanScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});
