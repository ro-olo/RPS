// Game class to handle the core game logic
class Game {
    constructor() {
        this.choices = ['rock', 'paper', 'scissors'];
        this.playerScore = 0;
        this.computerScore = 0;
        this.initializeElements();
        this.initializeEventListeners();
    }

    // Initialize DOM elements
    initializeElements() {
        this.buttons = document.querySelectorAll('.choice');
        this.goButton = document.querySelector('.go');
        this.againButton = document.querySelector('.again');
        this.playerScoreDisplay = document.querySelector("#playerScore");
        this.computerScoreDisplay = document.querySelector("#computerScore");
        this.roundResult = document.querySelector("#roundResult");
        this.gameResult = document.querySelector("#gameResult");
        this.player = document.querySelector("#player");
        this.computer = document.querySelector("#computer");
        this.game = document.querySelector(".game");
        
        // Set initial scores
        this.updateScoreDisplay();
        this.disableChoiceButtons();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.handlePlayerChoice(button));
            this.setupButtonHoverEffects(button);
        });

        this.goButton.addEventListener('click', () => this.startRound());
        this.againButton.addEventListener('click', () => this.resetGame());
        
        // Setup hover effects for control buttons
        [this.goButton, this.againButton].forEach(button => {
            this.setupButtonHoverEffects(button, 'change', 'onAgain');
        });

        // Add keyboard listener for Enter key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (!this.goButton.hidden) {
                    this.startRound();
                } else if (!this.againButton.hidden) {
                    this.resetGame();
                }
            }
        });
    }

    // Setup hover effects for buttons
    setupButtonHoverEffects(button, ...classes) {
        button.addEventListener('mouseenter', () => {
            if (!button.disabled || classes.length > 0) {
                button.classList.add(...(classes.length ? classes : ['hover']));
            }
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove(...(classes.length ? classes : ['hover']));
        });
    }

    // Handle player's choice
    handlePlayerChoice(button) {
        const playerSelection = button.value;
        this.disableChoiceButtons();
        this.playRound(playerSelection);
    }

    // Get computer's choice
    getComputerChoice() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    }

    // Determine round winner
    determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return 'Tie!';

        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (winConditions[playerChoice] === computerChoice) {
            return `You won! ${playerChoice} beats ${computerChoice}`;
        }
        return `You lost! ${computerChoice} beats ${playerChoice}`;
    }

    // Play a single round
    playRound(playerSelection) {
        const computerSelection = this.getComputerChoice();
        const result = this.determineWinner(playerSelection, computerSelection);
        
        this.roundResult.textContent = result;
        this.player.textContent = playerSelection;
        this.computer.textContent = computerSelection;
        
        if (result.includes('won')) {
            this.playerScore++;
        } else if (result.includes('lost')) {
            this.computerScore++;
        }
        
        this.updateScoreDisplay();
        this.checkGameEnd();
        this.goButton.style.display = "inline-block";
    }

    // Update score display
    updateScoreDisplay() {
        this.playerScoreDisplay.textContent = this.playerScore;
        this.computerScoreDisplay.textContent = this.computerScore;
    }

    // Enable/disable choice buttons
    disableChoiceButtons() {
        this.buttons.forEach(button => button.disabled = true);
    }

    enableChoiceButtons() {
        this.buttons.forEach(button => button.disabled = false);
    }

    // Start a new round
    startRound() {
        this.goButton.style.display = 'none';
        this.enableChoiceButtons();
        this.roundResult.textContent = '';
        this.gameResult.textContent = '';
        this.player.textContent = "";
        this.computer.textContent = "";
    }

    // Check if game has ended
    checkGameEnd() {
        if (this.playerScore === 5 || this.computerScore === 5) {
            const winner = this.playerScore === 5 ? 'Player' : 'Computer';
            this.gameResult.textContent = `Game Over! ${winner} wins!`;
            this.againButton.hidden = false;
            this.goButton.style.display = "none";
            this.buttons.forEach((button) => {
                button.disabled = true;
            })
            if (this.playerScore === 5) {
                this.game.classList.add("winner");
            } else {
                this.game.classList.add("loser");
            }
        }
    }

    // Reset the game
    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.updateScoreDisplay();
        this.roundResult.textContent = '';
        this.gameResult.textContent = '';
        this.goButton.style.display = 'block';
        this.againButton.hidden = true;
        this.disableChoiceButtons();
        this.game.classList.remove("loser");
        this.game.classList.remove("winner");
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Game();
});