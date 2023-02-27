/* 
GAME FUNCTION:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guesses remaining
- notify the player of the correct answer if player loses
- let player choose to play again 
*/

// game values
let min = 1, 
    max = 10,
    winnerNum = getRandomNum(min, max),
    guessesLeft = 3;

// ui elements
// connects all variables to selectors in HTML
const game = document.querySelector('#game'),  //this is the wrapper
    minNum = document.querySelector('.min-num'), 
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// assign ui min and max
// this adds the text of the game values (declared above) 
// dynamic
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

// listen for guess 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value); //changes input from a string to a number

    //validate 
    if(isNaN(guess) || guess < min || guess > max){ //if guess is NaN (like a string) or less than min or greater than max, run the setMessage function
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check if won 
    if(guess === winnerNum){
        //game over - won
        gameOver(true, `${winnerNum} is correct! You win!`);

    } else {
        //wrong number
        guessesLeft -= 1; //takes away a guess

        if(guessesLeft === 0) {
            //games over - lost
            gameOver(false, `Game over, you lost. The correct number was ${winnerNum}`);
        } else {
            //game continues - answer wrong

             //change border color
             guessInput.style.borderColor = 'red';

             //clear input
             guessInput.value = '';

             //tell user its the wrong number
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
        }
    }
});

// game over 
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set text color 
    message.style.color = color;
    //set message 
    setMessage(msg); 

    //play again?
    guessBtn.value = 'Play again!';
    guessBtn.className += 'play-again'; 
}

//get winning number 
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}



//set message function 

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
