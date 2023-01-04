const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button.selection')
let userChoice
let computerChoice

// const endGame = () => {
//     if (incrementComputerScore === 10) {
  
//       // changes result output background-colour for lose scenario
//       let element = document.querySelector(".results-section");
//       element.style.backgroundColor = "red";
//       resultDisplay.innerHTML = `Bad luck, the computer won ${incrementComputerScore} rounds. You lost the game!!! (The Game will restart shortly. Have another go!).`;
//     }
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
    userChoice = e.target.innerText
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
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


