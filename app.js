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
    winnerNum = 2,
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

// listen for guess 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value); //changes input from a string to a number

    //validate 
    if(isNaN(guess) || guess < min || guess > max){ //if guess is NaN (like a string) or less than min or greater than max, run the setMessage function
        setMessage(`Please enter a number between ${min} and ${max}`, 'red', 'pink');
    }

    //check if won 
    if(guess === winnerNum){
        //disable input
        guessInput.disabled = true;
        //change border color
        guessInput.style.borderColor = 'green';
        //set message 
        setMessage(`${winnerNum} is correct! You win!`, 'green');
    } else {

    }
});

//set message function 

function setMessage(msg, color, background){
    message.style.color = color;
    message.style.background = background;
    message.textContent = msg;
}
