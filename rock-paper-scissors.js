function getComputerChoice() {
    let int = getRandomInt(0, 3);
    if (int == 0) {
        return 'Rock';
    } else if (int == 1) {
        return 'Paper';
    } else if (int == 2) {
        return 'Scissors';
    }
}

/* Gets a random number between two integers. Maximum is exclusive and minimum is inclusive. */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase(); 

    switch(playerSelection) {
        case 'ROCK':
            if (computerSelection == 'ROCK') {
                return 'Tie!';
            } else if ( computerSelection == 'PAPER') {
                return 'You Lose! Paper Beats Rock!';
            } else {
                return 'You Win! Rock Beats Scissors!'
            }
            break; 
        case 'PAPER':
            if (computerSelection == 'PAPER') {
                return 'Tie!';
            } else if ( computerSelection == 'SCISSORS') {
                return 'You Lose! Scissors Beats Paper!';
            } else {
                return 'You Win! Paper Beats Rock!'
            }
            break; 
        case 'SCISSORS':
            if (computerSelection == 'SCISSORS') {
                return 'Tie!';
            } else if ( computerSelection == 'ROCK') {
                return 'You Lose! Rock Beats Scissors!';
            } else {
                return 'You Win! Scissors Beats Paper!'
            }
            break; 
        }
}
