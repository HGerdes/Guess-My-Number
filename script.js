'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //incorrect input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';

    // if the guess is correct
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width = '30rem'; //changes the width of the box behind the number
        document.querySelector('.highscore')

        //sets highscore if greater than previous highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // if the guess is too high or too low
    } else if (score > 1) {
        if (guess > 20) {
            document.querySelector('.message').textContent = 'Guess a number between 1 and 20!';
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
        }
    // if the score reaches 0
    } else {
        document.querySelector('.message').textContent = 'You lose!';
        score = 0;
    }
    // sets the variable to the actual score
    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});
