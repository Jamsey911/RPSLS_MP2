const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button.selection')
let userChoice
let computerChoice
let userNewScore = 0;
let compNewScore = 0;

function bestOfThree() {
    if (userNewScore == 3) {
        let clear = document.querySelector('#selections');
        clear.remove();
        // resets game after 7 seconds once winner is declared
     setTimeout(function () {
         location.reload();
       }, 7000); 
    } if (compNewScore == 3) {
        let clear = document.querySelector('#selections');
        clear.remove();
        //resets game after 7 seconds once winner is declared
     setTimeout(function () {
         location.reload();
       }, 7000);
     }
}

// Increments Users Score
function incrementScore() {
    document.getElementById('result-score').innerText = ++userNewScore
    console.log(userNewScore)
}
// Increments Computers Score
function incrementComputerScore() {
    document.getElementById('computer-result-score').innerText = ++compNewScore
    console.log(compNewScore)
}

// Add Click function for Game Button Selections
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.innerText
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    bestOfThree()
}))

// generate Computer Choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoice = 'Rock👊'
    }
    if (randomNumber === 1) {
        computerChoice = 'Paper📃'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors✂️'
    }
    if (randomNumber === 3) {
        computerChoice = 'Lizard🦎'
    }
    if (randomNumber === 4) {
        computerChoice = 'Spock🖖'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// Generate Result
function getResult() {
    // Draw funtion
    if (computerChoice === userChoice) {
        result = 'Its A Draw'
    }
    // Lose Funtion
    if (computerChoice === 'Rock👊' && userChoice === "Scissors✂️") {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Rock👊' && userChoice === "Lizard🦎") {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Paper📃' && userChoice === 'Rock👊') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Paper📃' && userChoice === 'Spock🖖') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Scissors✂️' && userChoice === 'Paper📃') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Scissors✂️' && userChoice === 'Lizard🦎') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Lizard🦎' && userChoice === 'Paper📃') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Lizard🦎' && userChoice === 'Spock🖖') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Spock🖖' && userChoice === 'Scissors✂️') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'Spock🖖' && userChoice === 'Rock👊') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    // Win Function
    if (computerChoice === 'Scissors✂️' && userChoice === 'Rock👊') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'Lizard🦎' && userChoice === 'Rock👊') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'Scissors✂️' && userChoice === 'Paper📃') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'Spock🖖' && userChoice === 'Paper📃') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'Paper📃' && userChoice === 'Scissors✂️') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'Lizard🦎' && userChoice === 'Scissors✂️') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'Paper📃' && userChoice === 'Lizard🦎') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'Spock🖖' && userChoice === 'Lizard🦎') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'Scissors✂️' && userChoice === 'Spock🖖') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'Rock👊' && userChoice === 'Spock🖖') {
        result = 'You Win!';
        incrementScore();
    }
    resultDisplay.innerHTML = result
}

