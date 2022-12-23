'use strict';

// A secret number is generated
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

// User enters a string which needs to be converted to a number
let guess = Number(document.querySelector('.guess').value);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// We should check if the number is correct
document.querySelector('.check').addEventListener('click', function () {
  if (score > 0) {
    guess = Number(document.querySelector('.guess').value);
    if (guess < 1 || guess > 20) {
      displayMessage('Invalid Number');
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
    } else {
      displayMessage('You win!');
      if (document.querySelector('.highscore').textContent < score) {
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
    document.querySelector('.score').textContent = score;
  } else {
    const score = 0;
    displayMessage('No score, reset the game!');
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
