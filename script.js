function getComputerChoice() {
    if (Math.floor(Math.random() * 100) > 66) {
        return "Rock";
    }
    else if (Math.floor(Math.random() * 100) > 33) {
        return "Paper";
    }
    else {
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
        console.log('No winner, you chose the same');
        return roundResult;
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            roundResult.playerScore = 0;
            roundResult.computerScore = 1;
            console.log('You Lose! Paper beats Rock');
            return roundResult;
        }
        else if (computerSelection === 'scissors') {
            roundResult.playerScore = 1;
            roundResult.computerScore = 0;
            console.log('You Win! Rock beats Scissors');
            return roundResult;            
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            roundResult.playerScore = 1;
            roundResult.computerScore = 0;
            console.log('You Win! Paper beats Rock');
            return roundResult;             
        }
        else if (computerSelection === 'scissors') {
            roundResult.playerScore = 0;
            roundResult.computerScore = 1;
            console.log('You Lose! Scissors beats Paper');
            return roundResult;                
        }
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection === 'rock') {
            roundResult.playerScore = 0;
            roundResult.computerScore = 1;
            console.log('You Lose! Rock beats Scissors');
            return roundResult;            
        }
        else if (computerSelection === 'paper') {
            roundResult.playerScore = 1;
            roundResult.computerScore = 0;
            console.log('You Win! Scissors beats Paper');
            return roundResult;            
        }
    }

    else {
        return 'You have to pick Rock, Paper or Scissors';
    }
}

let options = document.querySelector('#options');
options.addEventListener('click', (event) => {
    
    let target = event.target;

    switch (target.id) {
        case 'rock':
            console.log('rock was clicked');
            break;
        case 'paper':
            console.log('paper was clicked');
            break;
        case 'scissors':
            console.log('scissors was clicked');
            break;
    }
});
