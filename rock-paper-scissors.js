let playerScore = 0;
let computerScore = 0;

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
rock.value = 'ROCK';
let paper = document.querySelector('#PAPER');
paper.value = 'PAPER';
let scissors = document.querySelector('#SCISSORS');
scissors.value = 'SCISSORS';

rock.addEventListener('click', play);
paper.addEventListener('click', play);
scissors.addEventListener('click', play);

let results = document.querySelector('#results');


/* Gets a random number between two integers. Maximum is exclusive and minimum is inclusive. */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function play(event) {
    console.log(event.target.value);
    let playerSelection = event.target.value;
    let computerSelection = getComputerChoice().toUpperCase(); 

    switch(playerSelection) {
        case 'ROCK':
            if (computerSelection == 'ROCK') {
                return 'Tie!';
            } else if ( computerSelection == 'PAPER') {
                computerScore += 1;
            } else {
                playerScore += 1;
            }
            game();
            break; 
        case 'PAPER':
            if (computerSelection == 'PAPER') {
                return 'Tie!';
            } else if ( computerSelection == 'SCISSORS') {
                computerScore += 1;
            } else {
                playerScore += 1;
            }
            game();
            break; 
        case 'SCISSORS':
            if (computerSelection == 'SCISSORS') {
                return 'Tie!';
            } else if ( computerSelection == 'ROCK') {
                computerScore += 1;
            } else {
                playerScore += 1;
            }
            game();
            break; 
        }
}

function game() {
    console.log(computerScore);
    if (computerScore == 5) {
        results.textContent = 'You Lost the Tournament!';
    } else if (playerScore == 5) {
        results.textContent = 'You Won the Tournament!';
    } else {
        results.textContent = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;
    }
    
//   result = play(prompt(), getComputerChoice());
//    score += calcScore(result);
    
    /*
    if (score > 0) {
        console.log('You Won the Tournament!')
    } else if (score == 0) {
        console.log('The Tournament is a Draw!')
    } else {
        console.log('You Lost the Tournament!')
    } */
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

