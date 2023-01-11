/**
 * create game variables
 */
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button.selection');
let result = ('getResult()');
let userChoice;
let computerChoice;
let userNewScore = 0;
let compNewScore = 0;
let clear = document.querySelector("#selections");

/**
 * funtion to calculate end game when 3 rounds has been won
 */
function bestOfThree() {
  if (userNewScore == 3) {
    /**
     * Audio plays when user wins three games
     */
    let win = new Audio("assets/audio/win.mp3");
    win.play();
        /**
         * resets game after 7 seconds once winner is declared
         */
    setTimeout(function () {
    location.reload();
    }, 7000); 
    /**
     * Changes selections display to the below if user wins three games
     */
    clear.style.backgroundColor = "green";
    clear.style.fontSize = '2rem';
    clear.style.padding = '20px 0';
    clear.style.margin = '20px 0';
    clear.style.textAlign = 'center';
    clear.innerHTML = ('Well done, you won!  (The Game will restart shortly. Have another go!)');
       
  } if (compNewScore == 3) {
    /**
     * Audio loses when user wins three games
     */
    let lose = new Audio("assets/audio/lose.mp3");
    lose.play();
    /**
     * resets game after 7 seconds once winner is declared
     */
    setTimeout(function () {
    location.reload();
    }, 7000);
    /**
     * Changes selections display to the below if user loses three games
     */
    clear.style.backgroundColor = "red";
    clear.style.fontSize = '2rem';
    clear.style.padding = '20px 0';
    clear.style.margin = '20px 0';
    clear.style.textAlign = 'center';
    clear.innerHTML = ('Bad luck, you lost the game!!! (The Game will restart shortly. Have another go!)');
     }
}
/**
 * Increments Users Score
 */
function incrementScore() {
  document.getElementById('result-score').innerText = ++userNewScore;
}
/**
 * Increments Computers Score
 */
function incrementComputerScore() {
  document.getElementById('computer-result-score').innerText = ++compNewScore;
}

/**
 * Add Click function for Game Button Selections
 */
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.innerText;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  bestOfThree();
}));
/**
 * Generate Computer Choice
 */
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 0) {
    computerChoice = 'Rock👊';
  }
  if (randomNumber === 1) {
    computerChoice = 'Paper📃';
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors✂️';
  }
  if (randomNumber === 3) {
    computerChoice = 'Lizard🦎';
  }
  if (randomNumber === 4) {
    computerChoice = 'Spock🖖';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

/**
 * Generate Result
 */
function getResult() {
  /**
   * Draw funtion
   */
  if (computerChoice === userChoice) {
      result = 'Its A Draw';
  }
  /**
   * Lose Funtion
   */
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
  /**
   * Win Function
   */
  if (computerChoice === 'Scissors✂️' && userChoice === 'Rock👊') {
      result = 'You Win!';
      incrementScore();
  }
  if (computerChoice === 'Lizard🦎' && userChoice === 'Rock👊') {
      result = 'You Win!';
      incrementScore();
  }
  if (computerChoice === 'Rock👊' && userChoice === 'Paper📃') {
      result = 'You Win!';
      incrementScore();
  }
  if (computerChoice === 'Spock🖖' && userChoice === 'Paper📃') {
      result = 'You Win!';
      incrementScore();
  }
  if (computerChoice === 'Paper📃' && userChoice === 'Scissors✂️') {
      result = 'You Win!';
      incrementScore();
  }
  if (computerChoice === 'Lizard🦎' && userChoice === 'Scissors✂️') {
      result = 'You Win!';
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
  resultDisplay.innerHTML = result;
}