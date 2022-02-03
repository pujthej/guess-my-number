'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNum = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When no input
  if (!guess) {
    displayMessage('No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayScore(score);
    displayNum(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Your guess is too high!'
          : 'Your guess is too low!'
      );
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('You lose!');
    }
  }
});

//When player wants to play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  displayNum('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
