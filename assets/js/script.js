const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button.selection')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)

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

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its A Draw'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lose!'
    }
    if (computerChoice === 'rock' && userChoice === 'lizard') {
        result = 'You Lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'spock') {
        result = 'You Lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'lizard') {
        result = 'You Lose!'
    }
    if (computerChoice === 'lizard' && userChoice === 'paper') {
        result = 'You Lose!'
    }
    if (computerChoice === 'lizard' && userChoice === 'spock') {
        result = 'You Lose!'
    }
    if (computerChoice === 'spock' && userChoice === 'scissors') {
        result = 'You Lose!'
    }
    if (computerChoice === 'spock' && userChoice === 'rock') {
        result = 'You Lose!'
    }
}


