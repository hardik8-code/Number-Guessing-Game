// Import the readline module to interact with the user
const readline = require("readline");

// Create an interface to accept input/output from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

// Function to prompt the user to guess the number

function askGuess() {
  rl.question("Guess the number (between 1 and 100): ", (answer) => {
    const guess = parseInt(answer);
    attempts++;

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Please enter a valid number between 1 and 100.");
      askGuess();
      return;
    }

    // Check if the guess is correct
    if (guess === targetNumber) {
      console.log(
        `Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`
      );
      rl.close(); // Close the interface once the game ends
    } else if (guess < targetNumber) {
      console.log("Too low! Try again.");
      if (attempts < maxAttempts) {
        askGuess();
      } else {
        console.log(
          "Sorry, you have run out of attempts. The correct number was",
          targetNumber
        );
        rl.close();
      }
    } else {
      console.log("Too high! Try again.");
      if (attempts < maxAttempts) {
        askGuess();
      } else {
        console.log(
          "Sorry, you have run out of attempts. The correct number was",
          targetNumber
        );
        rl.close();
      }
    }
  });
}

// Start the game
console.log("Welcome to the Number Guessing Game!");
askGuess();