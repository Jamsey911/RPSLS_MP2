const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button.selection')
let userChoice
let computerChoice

// Increments Users Score
function incrementScore() {
    let oldScore = parseInt(document.getElementById('result-score').innerText)
    document.getElementById('result-score').innerText = ++oldScore
}
// Increments Computers Score
function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById('computer-result-score').innerText)
    document.getElementById('computer-result-score').innerText = ++oldScore
}

// Add Click function for Game Button Selections
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// generate Computer Score
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 4) {
        computerChoice = 'spock'
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
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'rock' && userChoice === "lizard") {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'paper' && userChoice === 'spock') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'scissors' && userChoice === 'lizard') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'lizard' && userChoice === 'paper') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'lizard' && userChoice === 'spock') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'spock' && userChoice === 'scissors') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === 'spock' && userChoice === 'rock') {
        result = 'You Lose!';
        incrementComputerScore();
    }
    // Win Function
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'lizard' && userChoice === 'rock') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'spock' && userChoice === 'paper') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'lizard' && userChoice === 'scissors') {
        result = 'You Win!'
        incrementScore();
    }
    if (computerChoice === 'paper' && userChoice === 'lizard') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'spock' && userChoice === 'lizard') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'scissors' && userChoice === 'spock') {
        result = 'You Win!';
        incrementScore();
    }
    if (computerChoice === 'rock' && userChoice === 'spock') {
        result = 'You Win!';
        incrementScore();
    }
    resultDisplay.innerHTML = result
}


