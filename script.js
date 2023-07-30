// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Get references to the input, buttons, and message elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const message = document.getElementById('message');

// Initialize the number of attempts and a flag to track if the game is over
let attempts = 0;
let gameOver = false;

// Function to check the user's guess
function checkGuess() {
  if (gameOver) return; // If the game is already over, don't proceed

  const userGuess = parseInt(guessInput.value);

  // Validate user input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    message.textContent = 'Please enter a valid number between 1 and 10.';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    gameOver = true;
    showResetButton();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Try a higher number.';
  } else {
    message.textContent = 'Try a lower number.';
  }
}

// Function to show the reset button and hide the input and guess button
function showResetButton() {
  guessInput.style.display = 'none';
  guessButton.style.display = 'none';
  resetButton.style.display = 'inline-block';
}

// Function to reset the game state and show the input and guess button
function resetGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  gameOver = false;
  guessInput.value = '';
  message.textContent = '';
  guessInput.style.display = 'inline-block';
  guessButton.style.display = 'inline-block';
  resetButton.style.display = 'none';
}

// Attach the checkGuess function to the button's click event
guessButton.addEventListener('click', checkGuess);

// Attach the resetGame function to the reset button's click event
resetButton.addEventListener('click', resetGame);
