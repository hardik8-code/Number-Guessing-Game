# Number Guessing Game

Welcome to the **Number Guessing Game**! This is a simple command-line game where the player needs to guess a random number between 1 and 100 in a limited number of attempts.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Description
This **Number Guessing Game** is a console-based game built with **JavaScript** using Node.js. The game randomly selects a number between 1 and 100 and asks the player to guess it. The player has a maximum number of attempts (10 attempts by default) to guess the correct number.

If the player's guess is too high or too low, the game will give a hint and ask them to try again. If the player guesses the number within the allowed number of attempts, they win; otherwise, they lose, and the correct number is revealed.

## Features
- Random number generation between 1 and 100.
- User input validation (only numbers between 1 and 100 are accepted).
- Player is given a maximum of 10 attempts to guess the number.
- Feedback is provided after each guess (too high, too low, or correct).
- The game ends when the correct number is guessed or the player runs out of attempts.

## Installation

### Prerequisites
- You need to have **Node.js** installed on your machine. You can download and install Node.js from [here](https://nodejs.org/).

### Steps
1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:hardik8-code/Number-Guessing-Game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Number-Guessing-Game
   ```

3. Install dependencies (if there are any):

   ```bash
   npm install
   ```

   *Note: This particular project doesn’t require external dependencies, but the command is here in case you decide to add any in the future.*

## How to Play
1. After installing the project, run the game using Node.js:

   ```bash
   node guessing-game.js
   ```

2. The game will prompt you to "Guess the number (between 1 and 100)". Enter your guess.

3. The game will give you feedback on whether your guess was too high, too low, or correct.

4. You will have a total of 10 attempts to guess the correct number.

5. If you guess correctly within 10 attempts, you win! If you run out of attempts, the correct number will be revealed, and the game will end.

## Technologies Used
- **JavaScript**: Core programming language for game logic.
- **Node.js**: Runtime environment to execute the JavaScript code.
- **Readline Module**: To handle user input/output in the command line.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository, make your changes, and create a pull request. Make sure to update the README or documentation if necessary.

1. Fork the project.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Additional Information:
- Feel free to add any other sections based on how your project evolves.
- You can include screenshots or gifs if you plan to have a graphical interface or a more complex CLI experience.
