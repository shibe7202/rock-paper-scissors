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

let rock = document.querySelector('#ROCK');
let paper = document.querySelector('#PAPER');
let scissors = document.querySelector('#SCISSORS');

rock.addEventListener('click', play('ROCK', getComputerChoice()));
paper.addEventListener('click', play('PAPER', getComputerChoice()));
scissors.addEventListener('click', play('SCISSORS', getComputerChoice()));

let results = document.querySelector('#results');



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

function game() {
    var result;
    let score = 0;
    for (let i = 0; i < 5; i++) {
        result = play(prompt(), getComputerChoice());
        console.log(result);
        score += calcScore(result);
    }
    if (score > 0) {
        console.log('You Won the Tournament!')
    } else if (score == 0) {
        console.log('The Tournament is a Draw!')
    } else {
        console.log('You Lost the Tournament!')
    }
}

function calcScore(result) {
    if (result == 'Tie!') {
        return 0;
    } else if (result.slice(4, 8) == 'Lose') {
        return -1;
    } else {
        return 1;
    }
}

game();