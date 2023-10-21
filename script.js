let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (Math.floor(Math.random() * 100) > 66) {
        return "Rock";
    } else if (Math.floor(Math.random() * 100) > 33) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let roundResult = {};

    if (playerSelection === computerSelection) {
        roundResult.playerScore = 0;
        roundResult.computerScore = 0;
        roundResult.message = "No winner, you chose the same";
        return roundResult;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundResult.playerScore = 0;
            roundResult.computerScore = 1;
            roundResult.message = "You Lose! Paper beats Rock";
            return roundResult;
        } else if (computerSelection === "scissors") {
            roundResult.playerScore = 1;
            roundResult.computerScore = 0;
            roundResult.message = "You Win! Rock beats Scissors";
            return roundResult;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult.playerScore = 1;
            roundResult.computerScore = 0;
            roundResult.message = "You Win! Paper beats Rock";
            return roundResult;
        } else if (computerSelection === "scissors") {
            roundResult.playerScore = 0;
            roundResult.computerScore = 1;
            roundResult.message = "You Lose! Scissors beats Paper";
            return roundResult;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection === "rock") {
            roundResult.playerScore = 0;
            roundResult.computerScore = 1;
            roundResult.message = "You Lose! Rock beats Scissors";            
            return roundResult;
        } else if (computerSelection === "paper") {
            roundResult.playerScore = 1;
            roundResult.computerScore = 0;
            roundResult.message = "You Win! Scissors beats Paper";
            return roundResult;
        }
    } else {
        roundResult.playerScore = 0;
        roundResult.computerScore = 0;
        roundResult.message = "You have to pick Rock, Paper or Scissors";
        return roundResult;
    }
}

let options = document.querySelector("#options");
options.addEventListener("click", (event) => {
    let target = event.target;
    let roundResult = null;

    switch (target.id) {
        case "rock":
            roundResult = playRound("rock", getComputerChoice());
            break;
        case "paper":
            roundResult = playRound("paper", getComputerChoice());
            break;
        case "scissors":
            roundResult = playRound("scissors", getComputerChoice());
            break;
    }

    playerScore += roundResult.playerScore;
    computerScore += roundResult.computerScore;
    
    let rndRes = document.querySelector('.roundresult');
    rndRes.innerText = roundResult.message;

    let gameRes = document.querySelector('.gameresult');
    gameRes.innerText = `You scored ${playerScore} and the computer scored ${computerScore}`;
    
    if (playerScore === 5) {
        let winRes = document.querySelector('.winnerresult');
        winRes.innerText = 'You win';
    }

    if (computerScore === 5) {
        let winRes = document.querySelector('.winnerresult');
        winRes.innerText = 'Computer wins';
    }

    // console.log(`You scored ${playerScore} and the computer scored ${computerScore}`)
    // console.log((playerScore > computerScore) ? 'You win' : (playerScore < computerScore) ? 'You lose' : 'It\'s a draw'); 

    console.log("click", playerScore, computerScore);
});
